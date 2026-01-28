import React, { useState } from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar';
import SideBarAdmin from '../pages/Admins/SideBar/SideBarAdmin';
import TopHeader from '../components/HeadBar/HeadBar';

const MainLayout = ({ isAdmin = false }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const sideBarWidth = 260;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SidebarComponent = isAdmin ? SideBarAdmin : SideBar;

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: '#f8fafc',
        backgroundImage: 'radial-gradient(at 0% 0%, rgba(81, 157, 177, 0.05) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 74, 173, 0.05) 0px, transparent 50%)',
      }}
    >
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box
          sx={{
            width: sideBarWidth,
            flexShrink: 0,
            position: 'sticky',
            top: 0,
            height: '100vh',
            borderRight: '1px solid rgba(134, 203, 222, 0.2)',
            bgcolor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <SidebarComponent />
        </Box>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: sideBarWidth,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <SidebarComponent onClose={handleDrawerToggle} />
        </Drawer>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <TopHeader onMenuClick={handleDrawerToggle} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 1, sm: 2, md: 3 },
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          <Box
            key={location.pathname}
            className="page-transition"
            sx={{ minHeight: '100%' }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
