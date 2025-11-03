import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "#1a1a1a" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "#61dafb",
            fontWeight: "bold",
          }}
        >
          SAACGAIS
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ color: "white" }}>Home</Button>
          <Button color="inherit" component={Link} to="/upload" sx={{ color: "white" }}>Upload</Button>
          <Button color="inherit" component={Link} to="/about" sx={{ color: "white" }}>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
