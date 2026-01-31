import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar
} from '@mui/material';
import {
  Dashboard,
  People,
  Description,
  AttachMoney
} from '@mui/icons-material';

function SideBarAdmin() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', text: 'Tổng quan', icon: <Dashboard />, path: '/dashboard' },
    { id: 'users', text: 'Quản lý người dùng', icon: <People />, path: '/users' },
    { id: 'records', text: 'Quản lý hồ sơ', icon: <Description />, path: '/main-screen' },
    { id: 'revenue', text: 'Quản lý doanh thu', icon: <AttachMoney />, path: '/revenue' },
  ];

  const drawerWidth = 256;
  const currentPath = location.pathname;

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid #E5E7EB',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Logo Header */}
        <Box sx={{ p: 3, borderBottom: '1px solid #E5E7EB' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #364153 0%, #101828 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight="bold" color="#101828">
                ADMIN
              </Typography>
              <Typography variant="caption" color="#6A7282">
                NAVI HEALTH
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Navigation Menu */}
        <Box sx={{ p: 2, flexGrow: 1 }}>
          <List>
            {menuItems.map((item) => {
              const isSelected = currentPath === item.path;
              return (
                <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={isSelected}
                    onClick={() => navigate(item.path)}
                    sx={{
                      borderRadius: '12px',
                      '&.Mui-selected': {
                        background: 'linear-gradient(to right, #364153, #101828)',
                        color: 'white',
                        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)',
                        '&:hover': {
                          background: 'linear-gradient(to right, #364153, #101828)',
                        },
                        '& .MuiListItemIcon-root': {
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isSelected ? 'white' : '#364153',
                        minWidth: 40,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: isSelected ? 'bold' : 'normal',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* User Profile */}
        <Box sx={{ p: 2, borderTop: '1px solid #E5E7EB' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.5, borderRadius: '12px' }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #364153 0%, #101828 100%)',
                fontSize: '16px',
              }}
            >
              AD
            </Avatar>
            <Box>
              <Typography variant="body2" fontWeight="bold" color="#101828">
                Admin
              </Typography>
              <Typography variant="caption" color="#6A7282">
                admin@navihealth.vn
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default SideBarAdmin;