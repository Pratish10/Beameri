import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Contactus = () => {
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
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="First Name"
                  fullWidth
                  sx={{ fontFamily: "Inria Sans" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField type="email" label="Email ID" fullWidth />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField type="tel" label="Mobile Number" fullWidth />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField label="Message" multiline rows={4} fullWidth />
              </FormControl>
            </Grid>
          </Grid>
          <br />
          {/* <Box>Captcha</Box> */}
          {/* <br /> */}
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
          >
            Send
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Contactus;
