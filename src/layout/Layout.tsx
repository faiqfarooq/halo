import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{ color: "text.primary", fontWeight: 600 }}
          >
            Halo Tutor
          </Typography>
        </Link>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ padding: 0 }}>
        {navigationItems?.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ margin: 0 }}>
            <ListItemText
              sx={{ margin: 0 }}
              primary={
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: isActiveLink(item.path) ? "#283643" : "inherit",
                    display: "block",
                    padding: "8px 16px",
                    fontWeight: 400,
                  }}
                >
                  {item.label}
                </Link>
              }
            />
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Box sx={{ mb: "6px", p: "0 12px", width: "100%" }}>
            <Button
              color="inherit"
              fullWidth
              sx={{
                color: "text.secondary",
                backgroundColor: "#f5f5f5",
                minWidth: "80px",
                borderRadius: 2,
                fontWeight: 500,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Box>
        </ListItem>
        <ListItem disablePadding>
          <Box sx={{ p: "0 12px", width: "100%" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: 2,
                fontSize: "24px",
                fontWeight: " 600 !important",
              }}
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #E5E7EB",
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "primary.main",
                  borderRadius: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                Halo Tutor
              </Typography>
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Box sx={{ display: "flex", gap: 1 }}>
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: isActiveLink(item.path)
                        ? "#283643"
                        : theme.palette.text.secondary,
                      padding: "8px 16px",
                      borderRadius: "4px",
                      transition: "color 0.2s ease-in-out",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Button
                    color="inherit"
                    sx={{
                      color: "text.primary",
                      backgroundColor: "#f5f5f5",
                      minWidth: "80px",
                      borderRadius: 2,
                      fontWeight: 500,
                      fontSize: "1rem",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    }}
                    onClick={handleLoginClick}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 2, ml: 1 }}
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, mt: "64px" }}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: "grey.100",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            © {new Date().getFullYear()} Halo Tutor. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
