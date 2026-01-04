import { Box, Typography, Avatar, Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopHeader() {
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
        width: `calc(100vw - 250px - 50px)`,
        justifyContent: "space-between",
        py: 2.5,
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fff"
      }}
    >
      {/* --- LEFT: Greeting --- */}
      <Box>
        <Typography
          sx={{ fontSize: 22, fontWeight: 600, color: "#1e73be" }}
        >
          Xin chào, Nguyễn Văn A 👋
        </Typography>

        <Typography sx={{ color: "text.secondary", mt: 0.3 }}>
          Hôm nay là {today}
        </Typography>
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
