import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Ellipse from "../assets/Ellipse 1.svg";

const HowItWorks = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1200px",
          px: 2,
          mt: 15,
        }}
      >
        <Typography
          style={{
            color: "#FF1B00",
            textAlign: "center",
            fontFamily: "Inria Serif",
            fontSize: "2.1875rem",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "2.84375rem",
            letterSpacing: "0.10938rem",
          }}
        >
          How It Works
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box sx={{ my: 5 }}>
              <Typography
                style={{
                  color: "#333",
                  textAlign: "right",
                  fontFamily: "Inria Sans",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "3rem",
                  letterSpacing: "0.075rem",
                }}
              >
                <img
                  style={{ paddingRight: "10px" }}
                  src={Ellipse}
                  alt="ellipse"
                />
                Step 1 : Upload Your Video
              </Typography>
              <Typography
                style={{
                  color: "#000",
                  textAlign: "right",
                  fontFamily: "Inria Sans",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                  letterSpacing: "0.0625rem",
                }}
              >
                Begin by uploading your heartfelt video message - it&apos;s the
                canvas for creating a unique and personalized greeting.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box sx={{ my: 5 }}>
              <Typography
                style={{
                  color: "#333",
                  textAlign: "left",
                  fontFamily: "Inria Sans",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "3rem",
                  letterSpacing: "0.075rem",
                }}
              >
                <img
                  style={{ paddingRight: "10px" }}
                  src={Ellipse}
                  alt="ellipse"
                />
                Step 2 : Enter Recipients Details
              </Typography>
              <Typography
                style={{
                  color: "#000",
                  textAlign: "left",
                  fontFamily: "Inria Sans",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                  letterSpacing: "0.0625rem",
                  marginLeft: "25px",
                }}
              >
                Next, provide the names and WhatsApp numbers of your loved ones
                or friends who&apos;ll receive this special message - this is
                where the magic starts.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ my: 5 }}>
              <Typography
                style={{
                  color: "#333",
                  textAlign: "right",
                  fontFamily: "Inria Sans",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "3rem",
                  letterSpacing: "0.075rem",
                }}
              >
                <img
                  style={{ paddingRight: "10px" }}
                  src={Ellipse}
                  alt="ellipse"
                />
                Step 3 : AI Customization
              </Typography>
              <Typography
                style={{
                  color: "#000",
                  textAlign: "right",
                  fontFamily: "Inria Sans",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                  letterSpacing: "0.0625rem",
                }}
              >
                Our advanced AI technology works behind the scenes, customizing
                your video by seamlessly integrating the names of your
                recipients into your message, creating a truly personal
                connection.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box sx={{ my: 5 }}>
              <Typography
                style={{
                  color: "#333",
                  textAlign: "left",
                  fontFamily: "Inria Sans",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "3rem",
                  letterSpacing: "0.075rem",
                }}
              >
                <img
                  style={{ paddingRight: "10px" }}
                  src={Ellipse}
                  alt="ellipse"
                />
                Step 4 : Schedule & Send
              </Typography>
              <Typography
                style={{
                  color: "#000",
                  textAlign: "left",
                  fontFamily: "Inria Sans",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                  letterSpacing: "0.0625rem",
                  marginLeft: "25px",
                }}
              >
                Now, it&apos;s time to schedule the delivery of your
                personalized videos, ensuring that your warm wishes reach your
                loved ones exactly when you want them to, creating memorable
                moments that matter.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HowItWorks;
