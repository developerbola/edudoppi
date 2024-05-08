import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";

// MUI Components 
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const drawerWidth = 240;
const navItems = ["home", "about", "courses", "contact"];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Inter" }}>
        edudoppi
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            to={item}
            smooth="true"
            duration={500}
            key={item}
            offset={-70}
          >
            <ListItem>
              <ListItemButton
                sx={{ textAlign: "start", textTransform: "capitalize" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <section id="home">
      <Box sx={{ display: "flex", bgcolor: "transparent" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: "transparent",
            backgroundImage: "none",
            height: "100px",
            boxShadow: "0",
            padding: "0 60px",
            px: { xs: "20px", md: "40px", lg: "" },
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #ffffff5",
          }}
        >
          <Toolbar sx={{ m: "auto 0", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src={logo}
                alt="navLogo"
                height={40}
                style={{
                  WebkitFilter: "drop-shadow(0 0 3px #fff)",
                  filter: "drop-shadow(0 0 4px #fff)",
                  marginRight: "10px"
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  fontFamily: "Inter",
                  fontSize: "30px",
                }}
              >
                edudoppi
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginRight: "30px",
                position: "relative",
              }}
              className="linksBox"
            >
              {navItems.map((item) => (
                <Link to={item == "home" ? "/" : item} key={item}>
                  <Button
                    key={item}
                    sx={{
                      color: "#a2a2a2",
                      fontSize: { xs: ".9rem", md: "1rem", lg: "1.2rem" },
                      margin: { xs: "0 0px", md: "0 10px" },
                      fontFamily: "inter",
                    }}
                    className="active"
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
            {/* <Button
              sx={{
                color: "#fff",
                bgcolor: "#00ff0833",
                p: "8px 20px",
                borderRadius: "25px",
                ml: "20px",
              }}
              variant="outlined"
            >
              Login
            </Button> */}
          </Toolbar>
        </AppBar>
        <nav style={{ background: "red" }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              bgcolor: "transparent",
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
    </section>
  );
}

export default DrawerAppBar;
