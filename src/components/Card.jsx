import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

const PricingCard = (props) => {
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

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1200px",
        px: 2,
        mt: 15,
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
          {props.title}
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontFamily: "Inria Sans",
            fontSize: { xs: "1rem", sm: "1.5rem" },
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "150%",
            letterSpacing: "0.06rem",
          }}
        >
          {props.content}
        </Typography>
      </Box>
      <br />

      <Typography
        variant="body1"
        sx={{
          color: "#000",
          fontFamily: "Inria Sans",
          fontSize: { xs: "1rem", sm: "1.5rem" },
          fontStyle: "normal",
          fontWeight: 300,
          lineHeight: "150%",
          letterSpacing: "0.06rem",
        }}
      >
        {props.content2}
      </Typography>
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
  );
};

PricingCard.propTypes = {
  content2: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PricingCard;
