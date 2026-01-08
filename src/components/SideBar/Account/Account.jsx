
import React from 'react'
import { Box, Avatar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
function Account({dimension}) {
  const {sideBarWidth} = dimension
  return (
    <>
      <Box
      sx={{
        width: sideBarWidth,
        borderRadius: 3,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 1.5
      }}
    >
      {/* Profile */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar sx={{ bgcolor: "#90caf9", width: 48, height: 48 }}>
          NV
        </Avatar>

        <Box>
          <Typography sx={{ fontWeight: 600 }}>
            Nguyễn Văn A
          </Typography>
          <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
            nguyenvana@email.com
          </Typography>
        </Box>
      </Box>

      {/* Logout button */}
      <Button
        variant="outlined"
        startIcon={<LogoutIcon />}
        sx={{
          textTransform: "none",
          borderRadius: 2,
          justifyContent: "flex-start"
        }}
        fullWidth
      >
        Đăng xuất
      </Button>
    </Box>
    </>
  )
}

export default Account