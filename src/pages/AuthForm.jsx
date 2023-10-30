import * as React from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthForm = () => {
  const [variant, setVariant] = React.useState("LOGIN");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    severity: "error",
    message: "",
  });

  const navigate = useNavigate();

  const commonStyles = {
    fullWidth: { fullWidth: true },
    disabled: { disabled: isLoading },
    inputContainer: {
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#414345",
      },
      "& .MuiFormLabel-root": {
        color: "#414345",
        fontFamily: "Inria Sans",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#414345",
      },
    },
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const toggleVariantHandler = React.useCallback(() => {
    setVariant((prevVariant) =>
      prevVariant === "LOGIN" ? "REGISTER" : "LOGIN"
    );
  }, []);

  const renderTextField = (label, type, id, setState) => (
    <Grid item xs={12} sx={{ py: 1 }}>
      <TextField
        variant="outlined"
        label={label}
        type={type}
        id={id}
        onChange={(e) => setState(e.target.value)}
        {...commonStyles.fullWidth}
        sx={commonStyles.inputContainer}
      />
    </Grid>
  );

  const renderPasswordInput = () => (
    <Grid item xs={12} sx={{ py: 1 }}>
      <FormControl
        variant="outlined"
        {...commonStyles.fullWidth}
        sx={commonStyles.inputContainer}
      >
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Grid>
  );

  const renderConfirmPasswordInput = () => (
    <Grid item xs={12} sx={{ py: 1 }}>
      <FormControl
        variant="outlined"
        {...commonStyles.fullWidth}
        sx={commonStyles.inputContainer}
      >
        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
        <OutlinedInput
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
        />
      </FormControl>
    </Grid>
  );

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (variant === "LOGIN") {
      if (!email || !password) {
        setEmailError(!email ? "Email is required" : "");
        setPasswordError(!password ? "Password is required" : "");
        setIsLoading(false);
        setSnackbar({
          open: true,
          severity: "error",
          message: "Email and password are required.",
        });
        return;
      }
      try {
        const response = await axios.post(
          `https://crowded-sweatpants-elk.cyclic.cloud/api/customer/login`,
          {
            email,
            password,
          }
        );
        if (response.status === 200) {
          setSnackbar({
            open: true,
            severity: "success",
            message: "Login successful.",
          });
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        setSnackbar({
          open: true,
          severity: "error",
          message: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    }

    if (variant === "REGISTER") {
      if (!name || !email || !password || !confirmPassword) {
        setNameError(!name ? "Name is required" : "");
        setEmailError(!email ? "Email is required" : "");
        setPasswordError(!password ? "Password is required" : "");
        setConfirmPasswordError(
          !confirmPassword ? "Confirm Password is required" : ""
        );
        setIsLoading(false);
        setSnackbar({
          open: true,
          severity: "error",
          message: "All fields are required for registration.",
        });

        return;
      }

      if (password !== confirmPassword) {
        setConfirmPasswordError("Password and Confirm Password must match");
        setIsLoading(false);
        setSnackbar({
          open: true,
          severity: "error",
          message: "Password and Confirm Password do not match.",
        });
        return;
      }

      try {
        const response = await axios.post(
          `https://crowded-sweatpants-elk.cyclic.cloud/api/customer/register`,
          {
            name,
            email,
            password,
          }
        );
        if (response.status === 201) {
          console.log("Registration successful.");
          setSnackbar({
            open: true,
            severity: "success",
            message: "Registration successful.",
          });
          navigate("/");
        }
      } catch (error) {
        console.log(error.message);
        setSnackbar({
          open: true,
          severity: "error",
          message: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div style={{ marginTop: "10rem" }}>
      <Paper
        elevation={5}
        sx={{
          margin: "0 auto",
          maxWidth: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            fontFamily: "Inria Serif",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            p: 5,
          }}
        >
          {variant === "LOGIN" ? "Log In" : "Register"}
        </Box>
        {emailError && (
          <p
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {emailError}
          </p>
        )}
        {passwordError && (
          <p
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {passwordError}
          </p>
        )}
        {nameError && (
          <p
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {nameError}
          </p>
        )}
        {confirmPasswordError && (
          <p
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {confirmPasswordError}
          </p>
        )}
        <Box sx={{ px: 3, py: 4, mt: 3 }}>
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              {variant === "REGISTER" &&
                renderTextField("Name", "text", "name", setName, nameError)}
              {renderTextField("Email", "email", "email", setEmail, emailError)}
              {renderPasswordInput(passwordError)}
              {variant === "REGISTER" &&
                renderConfirmPasswordInput(confirmPasswordError)}

              {variant === "LOGIN" && (
                <Typography
                  style={{
                    marginLeft: "16rem",
                    color: "#000",
                    fontFamily: "Inria Sans",
                    fontSize: "0.8rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  Forgot Password?
                </Typography>
              )}

              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  disabled={isLoading}
                  fullWidth
                  variant="outlined"
                  type="submit"
                  style={{
                    backgroundColor: "#F26A5A",
                    color: "#FFF",
                    fontFamily: "Inria Serif",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    padding: "9px 11px 9px 11px",
                    borderColor: "none",
                    borderRadius: "1.875rem",
                  }}
                >
                  {isLoading ? "Loading        " : ""}
                  {variant === "LOGIN" ? "Log In" : "Register"}
                </Button>
              </Grid>
            </Grid>
          </form>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                py: 2,
                fontSize: { xs: "10px", sm: "14px" },
                fontFamily: "Inria Sans",
              }}
            >
              {variant === "LOGIN"
                ? "New to Beameri?"
                : "Already have an account?"}
            </Typography>
            <Typography
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                py: 2,
                fontSize: { xs: "10px", sm: "14px" },
                fontFamily: "Inria Sans",
                color: "#F26A5A",
              }}
              onClick={toggleVariantHandler}
            >
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </Typography>
          </div>
        </Box>
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} onClose={closeSnackbar}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AuthForm;
