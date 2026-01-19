import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import {
  Home,
  Description,
  Psychology,
  NotificationsActive,
  ShoppingBag,
  HelpOutline,
  Feedback,
  Logout,
} from '@mui/icons-material';
import Logo from '../SideBar/Logo/Logo'
import Account from '../SideBar/Account/Account'
function SideBar({ onClose }) {
  const menuItems = [
    { text: 'Trang chủ', icon: Home, active: true },
    { text: 'Hồ sơ sức khỏe', icon: Description, active: false },
    { text: 'AI Sức khỏe', icon: Psychology, active: false },
    { text: 'Quản lý nhắc nhở', icon: NotificationsActive, active: false },
    { text: 'Gói dịch vụ', icon: ShoppingBag, active: false },
    { text: 'Trợ giúp / Hỗ trợ', icon: HelpOutline, active: false },
    { text: 'Phản hồi', icon: Feedback, active: false },
  ];
  const sideBarWidth = '250px'
  const logoHeight = '80px'
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          position: 'sticky',
          top: 0,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa',
          borderRight: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
          transition: 'background-color 0.3s ease',
          overflowY: 'auto'
        }}
      >
        <Box>
          <Logo dimension={{ sideBarWidth, logoHeight }} />
          <Box sx={{ flexGrow: 1, pt: 2, px: 2 }}>
            <List sx={{ p: 0 }}>
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = index === activeItem;

                return (
                  <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton
                      onClick={() => {
                        setActiveItem(index);
                        if (onClose) onClose();
                      }}
                      sx={{
                        borderRadius: '12px',
                        height: 48,
                        backgroundColor: isActive
                          ? '#004aad'
                          : (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 74, 173, 0.04)',
                        '&:hover': {
                          backgroundColor: isActive
                            ? '#004aad'
                            : (theme) => theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 74, 173, 0.08)',
                        },
                        boxShadow: isActive
                          ? '0px 4px 12px rgba(0, 74, 173, 0.25)'
                          : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <IconComponent
                          sx={{
                            fontSize: 20,
                            color: isActive
                              ? '#ffffff'
                              : (theme) => theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.7)'
                                : '#4a5565',
                            transition: 'color 0.3s ease',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive
                            ? '#ffffff'
                            : (theme) => theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.87)'
                              : '#4a5565',
                          lineHeight: '24px',
                          transition: 'color 0.3s ease',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box sx={{ width: '100%', p: 2, boxSizing: 'border-box' }}>
          <Account dimension={{ sideBarWidth, logoHeight }} />
        </Box>
      </Box>
    </>
  )
}

export default SideBar