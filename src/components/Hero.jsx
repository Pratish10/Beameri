import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import HeroGroup from "../assets/Hero Group.png";

const Hero = () => {
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
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={6}>
              <img height="350" src={HeroGroup} alt="Hero image" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography
                  style={{
                    fontFamily: "Kiwi Maru",
                    color: "#000",
                    fontSize: "2rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "132.023% ",
                    letterSpacing: "0.1575rem",
                  }}
                >
                  Beameri empowers users to send truly personalized video
                  messages for special occasions effortlessly.
                </Typography>
                <br />
                <br />
                <br />
                <Typography
                  style={{
                    color: "#333",
                    fontFamily: "Inria Sans",
                    fontSize: "1.5625rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "130%",
                    letterSpacing: "0.07813rem",
                  }}
                >
                  Design Your Unique Cards and Invitations, Try it for Free, and
                  Send Instantly
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
