import { Box, Divider, Grid, Typography } from "@mui/material";
import BeameriIcon from "../assets/beameri.svg";
import FacebookLogo from "../assets/facebook 1.png";
import InstagramLogo from "../assets/instagram 1.png";
import LinkedInLogo from "../assets/linkedin 1.png";
import TwitterLogo from "../assets/twitter 1.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      name: "facebook logo",
      link: "https://www.facebook.com/",
      src: FacebookLogo,
    },
    {
      name: "instagram logo",
      link: "https://www.instagram.com/",
      src: InstagramLogo,
    },
    {
      name: "linkedin logo",
      link: "https://www.linkedin.com/",
      src: LinkedInLogo,
    },
    {
      name: "twitter logo",
      link: "https://www.twitter.com/",
      src: TwitterLogo,
    },
  ];
  const NavItems = [
    { name: "Home", to: "/" },
    { name: "FAQ's", to: "/faqs" },
    { name: "Contact Us", to: "/contactus" },
  ];
  const Links = [
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms and Conditions", to: "/terms&conditions" },
  ];
  return (
    <Box
      style={{
        backgroundColor: "#333",
        height: "auto",
        flexShrink: 0,
        marginTop: "5rem",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          color: "#fff",
          textAlign: "center",
          fontStyle: "normal",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Box>
              <Box sx={{ py: 2 }}>
                <Link to="/">
                  <img
                    src={BeameriIcon}
                    alt="BeameriIcon"
                    style={{ height: "40px" }}
                  />
                </Link>
              </Box>
              <Box
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Inria Sans",
                  fontWeight: 300,
                  lineHeight: "2rem",
                  letterSpacing: "0.0625rem",
                  textAlign: "left",
                }}
                sx={{ py: 2, ml: { xs: 5, sm: 15, md: 20 } }}
              >
                <p>
                  Address: 5/180, Subhash Chandrabose Street, Opposite Ags
                  Cenimas, Madurvoyal. Pincode-600095.
                </p>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  py: 2,
                }}
              >
                {socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: "10px 10px" }}
                  >
                    <img
                      style={{ height: "35px" }}
                      src={item.src}
                      alt={item.name}
                    />
                  </a>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {NavItems.map((navItem) => (
                <NavLink
                  style={{
                    fontFamily: "Inria Serif",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1.7rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    padding: "40px 40px",
                  }}
                  key={navItem.name}
                  to={navItem.to}
                >
                  {navItem.name}
                </NavLink>
              ))}
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mr: { xs: 0, sm: 10, md: 16 },
              }}
            >
              {Links.map((link) => (
                <NavLink
                  style={{
                    fontFamily: "Inria Serif",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1.7rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    padding: "40px 40px",
                  }}
                  key={link.name}
                  to={link.to}
                >
                  {link.name}
                </NavLink>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Divider sx={{ borderBottom: "3px dashed white" }} />
          <Typography
            sx={{ textAlign: "left", ml: { xs: 5, sm: 15, md: 19 }, py: 2 }}
            style={{
              fontFamily: "Inria Sans",
              fontSize: "1.25rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.6",
              letterSpacing: "0.2rem",
            }}
          >
            Copyright: @{new Date().getFullYear()} Beameri.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
