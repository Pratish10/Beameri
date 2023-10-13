import { Box, Button, Grid, Typography } from "@mui/material";
import PrototypeGif from "../assets/tr71123-ai-art.jpeg";

const Vision = () => {
  const paragraphStyle = {
    color: "#000",
    fontFamily: "Inria Sans",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: "0.06rem",
  };
  const buttonStyle = {
    borderRadius: "0.1875rem",
    backgroundColor: "#F26A5A",
    color: "#fff",
    padding: "20px 20px 20px 20px",
    fontFamily: "Inria Serif",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  };
  const headingStyle = {
    color: "#FF1B00",
    fontFamily: "Inria Serif",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "0.10938rem",
  };

  const prototypeGif = [
    { name: "gif1", gif: PrototypeGif },
    { name: "gif2", gif: PrototypeGif },
    { name: "gif3", gif: PrototypeGif },
  ];

  const commonStyles = {
    ml: { xs: 10, sm: 20 },
    mr: { xs: 10, sm: 20 },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          margin: "0 auto",
          px: 2,
          mt: 15,
          ...commonStyles,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            style={headingStyle}
            sx={{
              fontSize: { xs: "1rem", sm: "1.7rem" },
            }}
          >
            We ensure that your message stands out and leaves a lasting
            impression
          </Typography>
        </Box>
        <br />
        <Box>
          <Typography variant="body1" style={paragraphStyle}>
            Our innovative platform let&apos;s you infuse your heartfelt wishes
            with the magic of personalization. Whether it&apos;s a birthday,
            anniversary, or any cherished event, Beameri allows you to upload
            your video, input recipient details, and watch as our AI transforms
            it into a one-of-a-kind message, addressing each recipient by name.
          </Typography>
        </Box>
        <br />

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {prototypeGif.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.name}>
                <img
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                  }}
                  src={item.gif}
                  alt={item.name}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <br />
        <Box>
          <Button
            style={buttonStyle}
            sx={{
              fontSize: { xs: "0.7rem", sm: "1rem" },
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Vision;
