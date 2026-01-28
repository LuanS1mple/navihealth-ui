import { useNavigate, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
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
import Logo from './Logo/Logo';
import Account from './Account/Account';

function SideBar({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Trang chủ', icon: Home, path: '/main' },
    { text: 'Hồ sơ sức khỏe', icon: Description, path: '/health-records' },
    { text: 'AI Sức khỏe', icon: Psychology, path: '/chatbot' },
    { text: 'Quản lý nhắc nhở', icon: NotificationsActive, path: '/reminders' },
    { text: 'Gói dịch vụ', icon: ShoppingBag, path: '/services' },
    { text: 'Trợ giúp / Hỗ trợ', icon: HelpOutline, path: '/support' },
    { text: 'Phản hồi', icon: Feedback, path: '/feedback' },
  ];

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Container Logo */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Logo dimension={{ sideBarWidth: 260, logoHeight: 80 }} />
      </Box>

      {/* Menu Options */}
      <Box sx={{ flexGrow: 1, px: 2, mt: 2 }}>
        <List sx={{ p: 0 }}>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    if (onClose) onClose();
                  }}
                  sx={{
                    borderRadius: '12px',
                    py: 1.2,
                    px: 2,
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(81, 157, 177, 0.1) 0%, rgba(0, 74, 173, 0.1) 100%)'
                      : 'transparent',
                    color: isActive ? '#004aad' : '#64748b',
                    position: 'relative',
                    '&::before': isActive ? {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '20%',
                      height: '60%',
                      width: '4px',
                      backgroundColor: '#004aad',
                      borderRadius: '0 4px 4px 0',
                    } : {},
                    '&:hover': {
                      backgroundColor: 'rgba(0, 74, 173, 0.05)',
                      color: '#004aad',
                      '& .MuiListItemIcon-root': { color: '#004aad' }
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: isActive ? '#004aad' : '#94a3b8',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <IconComponent fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '14px',
                      fontWeight: isActive ? 600 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Divider sx={{ mx: 2, opacity: 0.5 }} />

      {/* Footer / Account Section */}
      <Box sx={{ p: 2 }}>
        <ListItemButton
          onClick={() => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate('/login');
          }}
          sx={{
            mt: 1,
            borderRadius: '12px',
            color: '#ef4444',
            '&:hover': { bgcolor: 'rgba(239, 68, 68, 0.05)' }
          }}
        >
          <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Đăng xuất"
            primaryTypographyProps={{ fontSize: '14px', fontWeight: 600 }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}

export default SideBar;