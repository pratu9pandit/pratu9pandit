import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box, IconButton } from "@mui/material";
import { Home, AccountCircle, Receipt, Menu ,BarChart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to get the active page

const drawerWidth = 240;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false); // Sidebar state
  const location = useLocation(); // Get current route

  // Toggle sidebar open/close
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navigation Bar */}
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${open ? drawerWidth : 0}px)` }, ml: { sm: `${open ? drawerWidth : 0}px` }, transition: "width 0.3s ease" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Drawer) */}
      <Drawer
        variant="permanent"
        open={open}
        onClose={handleDrawerToggle} // Close when clicking outside
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          transition: "width 0.3s ease",
          "& .MuiDrawer-paper": { width: open ? drawerWidth : 0, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          <ListItem 
            button 
            component={Link} 
            to="/" 
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: location.pathname === "/" ? "#1976d2" : "transparent", color: location.pathname === "/" ? "white" : "black" }}
          >
            <ListItemIcon sx={{ color: location.pathname === "/" ? "white" : "black" }}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/user-dashboard" 
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: location.pathname === "/user-dashboard" ? "#1976d2" : "transparent", color: location.pathname === "/user-dashboard" ? "white" : "black" }}
          >
            <ListItemIcon sx={{ color: location.pathname === "/user-dashboard" ? "white" : "black" }}>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="User Dashboard" />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/txn-dashboard" 
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: location.pathname === "/txn-dashboard" ? "#1976d2" : "transparent", color: location.pathname === "/txn-dashboard" ? "white" : "black" }}
          >
            <ListItemIcon sx={{ color: location.pathname === "/txn-dashboard" ? "white" : "black" }}>
              <Receipt />
            </ListItemIcon>
            <ListItemText primary="Transaction Dashboard" />
          </ListItem>

          <ListItem button component={Link} to="/reports-dashboard" sx={{ backgroundColor: location.pathname === "/reports-dashboard" ? "#1976d2" : "transparent", color: location.pathname === "/reports-dashboard" ? "white" : "black" }}>
            <ListItemIcon sx={{ color: location.pathname === "/reports-dashboard" ? "white" : "black" }}>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content (Auto-Shift Based on Sidebar State) */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${open ? drawerWidth : 0}px)` }, mt: 8, transition: "margin 0.3s ease" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
