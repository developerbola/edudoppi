import PropTypes from "prop-types";
import { Typography, Box, Tabs, Tab, Button } from "@mui/material";
import { useState } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ height: "100%", width: "100%", px: "6vw" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              position: "absolute",
              left: "3%",
              top: "5%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              opacity: 0.7,
              cursor: "pointer",
            }}
          >
            <ChevronLeftIcon />
            <Typography>Back to Home</Typography>
          </Box>
        </Link>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="My Courses" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} >
          <Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
            <Form label={"Name"} />
            <Form label={"Email"} />
            <Form label={"Password"} type={"password"} l={"3.5px"} />
            
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Courses Section
        </CustomTabPanel>
      </Box>
        <Button
          sx={{
            position: "absolute",
            top: "85%",
            left: "3%",
            color: "#fff",
            bgcolor: "#ff000010",
            p: "8px 20px",
            borderRadius: "25px",
            border: "1px solid #ff000060",
            ":hover": { border: "1px solid #ff000090", bgcolor: "#ff000030",},
          }}
          variant="outlined"
        >
          Logout
          <LogoutRoundedIcon sx={{ ml: "5px" }} />
        </Button>
    </>
  );
}
