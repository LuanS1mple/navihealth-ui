import { Box, Typography, Avatar, Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from '@mui/icons-material/Menu';

export default function TopHeader(props) {
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        borderBottom: "1px solid #e0e0e0",
        zIndex: 1000,
        px: { xs: 2, md: 3 },
        py: { xs: 1, md: 1.5 },
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}
    >
      {/* --- LEFT: Greeting --- */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onMenuClick}
          sx={{ mr: 2, display: { md: 'none' }, color: '#1e73be' }}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <Typography
            sx={{ fontSize: { xs: 18, md: 22 }, fontWeight: 600, color: "#1e73be" }}
          >
            Xin chào, Nguyễn Văn A 👋
          </Typography>

          <Typography sx={{ color: "text.secondary", mt: 0.3 }}>
            Hôm nay là {today}
          </Typography>
        </Box>
      </Box>

      {/* --- RIGHT: Actions --- */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton>
          <Badge color="error" variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Avatar sx={{ bgcolor: "#90caf9" }}>NV</Avatar>
      </Box>
    </Box>
  );
}
