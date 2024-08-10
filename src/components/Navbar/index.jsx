import logo from "/logo.png";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Person } from "@mui/icons-material";
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
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useContext } from "react";
import { Data } from "../../context";

const drawerWidth = 240;
const navItems = ["home", "courses"];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { user } = useContext(Data);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Inter" }}>
        edudoppi
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            to={item == "home" ? "/" : item}
            key={item}
            style={{ textDecoration: "none" }}
          >
            <ListItem>
              <ListItemButton
                sx={{
                  textAlign: "start",
                  textTransform: "capitalize",
                  color: "#fff",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  px: "15px",
                  bgcolor: "#ffffff05",
                }}
              >
                <ListItemText primary={item} />
                {item == "home" ? <HomeRoundedIcon /> : <CategoryRoundedIcon />}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Link
          to={user ? "/profile" : "/login"}
          style={{ textDecoration: "none" }}
        >
          <ListItem>
            <ListItemButton
              sx={{
                textAlign: "start",
                textTransform: "capitalize",
                color: "#fff",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                px: "15px",
                bgcolor: "#00ff291a",
              }}
            >
              <ListItemText primary={user ? "Profile" : "Login"} />
              {user ? <Person /> : <LoginRoundedIcon />}
            </ListItemButton>
          </ListItem>
        </Link>
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

            <Link to="/" style={{ textDecoration: "none" }}>
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
                    marginRight: "10px",
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
                    color: "#fff",
                  }}
                >
                  edudoppi
                </Typography>
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                marginRight: "30px",
                position: "relative",
              }}
              className="linksBox"
            >
              {navItems.map((item) => (
                <Link to={item == "home" ? "/" : item} key={item}>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: { xs: ".9rem", md: "1rem", lg: "1.2rem" },
                      margin: { xs: "0 0px", md: "0 10px" },
                      fontFamily: "inter",
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              ))}
              {user ? (
                <Link to={"/profile"}>
                  <Avatar sx={{ ml: "10px" }}></Avatar>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button
                    sx={{
                      color: "#fff",
                      bgcolor: "#ffffff10",
                      p: "8px 20px",
                      borderRadius: "25px",
                      ml: "10px",
                    }}
                    variant="outlined"
                  >
                    Login
                    <LoginRoundedIcon sx={{ ml: "5px" }} />
                  </Button>
                </Link>
              )}
            </Box>
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
              "& .MuiPaper-root": {
                bgcolor: "#00000020",
                backdropFilter: "blur(10px)",
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
