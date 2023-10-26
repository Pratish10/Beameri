import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useReducer, useState } from "react";

const initialState = {
  name: "",
  email: "",
  mobNumber: "",
  message: "",
  loading: false,
  nameError: "",
  emailError: "",
  mobNumberError: "",
  messageError: "",
  snackbar: {
    open: false,
    message: "",
    severity: "success",
  },
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, [action.field + "Error"]: action.value };
    case "SET_LOADING":
      return { ...state, loading: action.value };
    case "SET_SNACKBAR":
      return { ...state, snackbar: action.value };
    default:
      if (action.type === "SET_FIELD" && state[action.field + "Error"]) {
        return { ...state, [action.field + "Error"]: "" };
      }
      return state;
  }
};

const Contactus = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const [nameCharacterCount, setNameCharacterCount] = useState(0);
  const [emailCharacterCount, setEmailCharacterCount] = useState(0);
  const [mobNumberCharacterCount, setMobNumberCharacterCount] = useState(0);
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    const fieldsToValidate = ["name", "email", "mobNumber", "message"];
    fieldsToValidate.forEach((field) => {
      if (!state[field].trim()) {
        dispatch({
          type: "SET_ERROR",
          field: field,
          value: `${field} is required`,
        });
        isValid = false;
      } else {
        dispatch({ type: "SET_ERROR", field: field, value: "" });
      }
    });

    if (state.email.trim() && !isValidEmail(state.email)) {
      dispatch({
        type: "SET_ERROR",
        field: "email",
        value: "Invalid email address",
      });
      isValid = false;
    }

    if (state.mobNumber.trim() && state.mobNumber.length !== 10) {
      dispatch({
        type: "SET_ERROR",
        field: "mobNumber",
        value: "Invalid mobile number",
      });
      isValid = false;
    }

    return isValid;
  };

  const handleCloseSnackbar = () => {
    dispatch({ type: "SET_SNACKBAR", value: { open: false } });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", value: true });
    if (validateForm()) {
      const contactData = {
        name: state.name,
        email: state.email,
        mobNumber: state.mobNumber,
        message: state.message,
      };

      try {
        const response = await fetch(
          "https://crowded-sweatpants-elk.cyclic.cloud/api/contact/request/",
          {
            method: "POST",
            body: JSON.stringify(contactData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          dispatch({ type: "SET_FIELD", field: "name", value: "" });
          dispatch({ type: "SET_FIELD", field: "email", value: "" });
          dispatch({ type: "SET_FIELD", field: "mobNumber", value: "" });
          dispatch({ type: "SET_FIELD", field: "message", value: "" });
          dispatch({
            type: "SET_SNACKBAR",
            value: {
              open: true,
              message: "Successfully posted",
              severity: "success",
            },
          });
        } else {
          dispatch({
            type: "SET_SNACKBAR",
            value: {
              open: true,
              message: "Server returned an error",
              severity: "error",
            },
          });
        }
      } catch (error) {
        dispatch({
          type: "SET_SNACKBAR",
          value: {
            open: true,
            message: `An error occurred: ${error.message}`,
            severity: "error",
          },
        });
      } finally {
        dispatch({ type: "SET_LOADING", value: false });
      }
    } else {
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  const commonStyles = {
    ml: { xs: 2, sm: 20 },
    mr: { xs: 2, sm: 20 },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ margin: "0 auto", px: 2, mt: 15, ...commonStyles }}>
        <Box>
          <Typography
            sx={{
              color: "#000",
              textAlign: "left",
              fontFamily: "Inria Serif",
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              py: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inria Sans",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              py: 2,
            }}
          >
            Lorem ipsum dolor sit ametipsum
          </Typography>
        </Box>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Name"
                  fullWidth
                  sx={{ fontFamily: "Inria Sans" }}
                  value={state.name}
                  onChange={(e) => {
                    const name = e.target.value.substring(0, 49);
                    dispatch({
                      type: "SET_FIELD",
                      field: "name",
                      value: name,
                    });
                    setNameCharacterCount(name.length);

                    if (state.nameError) {
                      dispatch({
                        type: "SET_ERROR",
                        field: "name",
                        value: "",
                      });
                    }
                  }}
                  error={state.nameError !== ""}
                  helperText={
                    state.nameError ||
                    (state.nameError
                      ? ""
                      : `${nameCharacterCount}/50 characters allowed`)
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  type="email"
                  label="Email ID"
                  fullWidth
                  value={state.email}
                  onChange={(e) => {
                    const email = e.target.value.substring(0, 29);
                    dispatch({
                      type: "SET_FIELD",
                      field: "email",
                      value: email,
                    });
                    setEmailCharacterCount(email.length);

                    if (state.emailError) {
                      dispatch({
                        type: "SET_ERROR",
                        field: "email",
                        value: "",
                      });
                    }
                  }}
                  error={state.emailError !== ""}
                  helperText={
                    state.emailError ||
                    (state.emailError
                      ? ""
                      : `${emailCharacterCount}/30 characters allowed`)
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  type="tel"
                  label="Mobile Number"
                  fullWidth
                  value={state.mobNumber}
                  onChange={(e) => {
                    const mobNumber = e.target.value.substring(0, 29);
                    dispatch({
                      type: "SET_FIELD",
                      field: "mobNumber",
                      value: mobNumber,
                    });
                    setMobNumberCharacterCount(mobNumber.length);

                    if (state.mobNumberError) {
                      dispatch({
                        type: "SET_ERROR",
                        field: "mobNumber",
                        value: "",
                      });
                    }
                  }}
                  error={state.mobNumberError !== ""}
                  helperText={
                    state.mobNumberError ||
                    (state.mobNumberError
                      ? ""
                      : `${mobNumberCharacterCount}/30 characters allowed`)
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  value={state.message}
                  onChange={(e) => {
                    const message = e.target.value.substring(0, 29);
                    dispatch({
                      type: "SET_FIELD",
                      field: "message",
                      value: message,
                    });
                    setMessageCharacterCount(message.length);

                    if (state.messageError) {
                      dispatch({
                        type: "SET_ERROR",
                        field: "message",
                        value: "",
                      });
                    }
                  }}
                  error={state.messageError !== ""}
                  helperText={
                    state.messageError ||
                    (state.messageError
                      ? ""
                      : `${messageCharacterCount}/30 characters allowed`)
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Button
            style={{
              backgroundColor: "#F26A5A",
              color: "#FFF",
              fontFamily: "Inria Sans",
              fontSize: "1.2rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              padding: "10px 50px 10px 50px",
            }}
            type="submit"
          >
            {state.loading ? (
              <CircularProgress sx={{ color: "#fff" }} />
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </Box>
      <Snackbar
        open={state.snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={state.snackbar.severity} onClose={handleCloseSnackbar}>
          {state.snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contactus;
