import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BeameriIcon from "../assets/beameri.svg";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;
const NavItems = [
  { name: "Home", to: "/" },
  { name: "FAQ's", to: "/faqs" },
  { name: "Contact Us", to: "/contactus" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={BeameriIcon} alt="BeameriIcon" style={{ height: "40px" }} />
      </Typography>
      <Divider />
      <List>
        {NavItems.map((navItem) => (
          <ListItem key={navItem.name} disablePadding>
            <ListItemButton>
              <NavLink
                key={navItem.name}
                to={navItem.to}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontFamily: "Inria Serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  lineHeight: "normal",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                {navItem.name}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box style={{ marginTop: "20px" }}>
        <Button
          style={{
            backgroundColor: "#F26A5A",
            color: "#FFF",
            fontFamily: "Inria Serif",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            padding: "9px 20px 9px 20px",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        style={{
          backgroundColor: "#ffffff",
          position: "absolute",
          boxShadow: "none",
          padding: "20px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#333" }} />
          </IconButton>
          <Box
            sx={{ flexGrow: 0.7, ml: 15, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <img
                src={BeameriIcon}
                alt="BeameriIcon"
                style={{ height: "40px" }}
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0.1, display: { xs: "none", sm: "block" } }}>
            {NavItems.map((navItem) => (
              <NavLink
                key={navItem.name}
                to={navItem.to}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontFamily: "Inria Serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  lineHeight: "normal",
                  margin: "10px",
                }}
              >
                {navItem.name}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              style={{
                backgroundColor: "#F26A5A",
                color: "#FFF",
                fontFamily: "Inria Serif",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                padding: "9px 11px 9px 11px",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
