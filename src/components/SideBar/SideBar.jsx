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
function SideBar() {
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

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
      }}>
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
                      onClick={() => setActiveItem(index)}
                      sx={{
                        borderRadius: '12px',
                        height: 48,
                        backgroundColor: isActive ? '#004aad' : 'transparent',
                        '&:hover': {
                          backgroundColor: isActive ? '#004aad' : 'rgba(0, 74, 173, 0.08)',
                        },
                        boxShadow: isActive
                          ? '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)'
                          : 'none',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <IconComponent
                          sx={{
                            fontSize: 20,
                            color: isActive ? 'white' : '#4a5565',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: 400,
                          color: isActive ? 'white' : '#4a5565',
                          lineHeight: '24px',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <Account dimension={{ sideBarWidth, logoHeight }} />
      </Box>
    </>
  )
}

export default SideBar