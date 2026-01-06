import React from 'react'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Grid,
  Paper,
  Button,
  Container,
  Divider,
  Badge as MuiBadge
} from '@mui/material';
import {
  Dashboard,
  People,
  Description,
  AttachMoney,
  TrendingUp,
  Person,
  Article,
  SmartToy,
  Payments,
  ArrowForward,
  CheckCircle
} from '@mui/icons-material';
function SideBarAdmin() {
  const menuItems = [
    { id: 'dashboard', text: 'Tổng quan', icon: <Dashboard /> },
    { id: 'users', text: 'Quản lý người dùng', icon: <People /> },
    { id: 'records', text: 'Quản lý hồ sơ', icon: <Description /> },
    { id: 'revenue', text: 'Quản lý doanh thu', icon: <AttachMoney /> },
  ];
  const drawerWidth = 256;
  const [selectedMenu, setSelectedMenu] = React.useState('dashboard');
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
              {menuItems.map((item) => (
                <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selectedMenu === item.id}
                    onClick={() => setSelectedMenu(item.id)}
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
                        color: selectedMenu === item.id ? 'white' : '#364153',
                        minWidth: 40,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: selectedMenu === item.id ? 'bold' : 'normal',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
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
  )
}

export default SideBarAdmin