import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AuthForm = () => {
  const [variant, setVariant] = React.useState("LOGIN");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

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

  const toggleVariantHandler = () => {
    setVariant((prevVariant) =>
      prevVariant === "LOGIN" ? "REGISTER" : "LOGIN"
    );
  };

  const renderTextField = (label, type, id) => (
    <Grid item xs={12} sx={{ py: 1 }}>
      <TextField
        variant="outlined"
        label={label}
        type={type}
        id={id}
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

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (variant === "LOGIN") {
      console.log("LOGIN");
    }

    if (variant === "REGISTER") {
      console.log("REGISTER");
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
        <Box sx={{ px: 3, py: 4, mt: 3 }}>
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              {variant === "REGISTER" &&
                renderTextField("Name", "text", "name")}
              {renderTextField("Email", "email", "email")}
              {renderPasswordInput()}
              {variant === "REGISTER" && renderConfirmPasswordInput()}

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
    </div>
  );
};

export default AuthForm;
