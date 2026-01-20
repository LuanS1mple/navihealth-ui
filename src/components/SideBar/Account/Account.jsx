
import React, { useState, useEffect } from 'react'
import { Box, Avatar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import requestApi from '../../../apis/apis';
import { GET_ME } from '../../../constants/apis';
function Account({ dimension }) {
  // eslint-disable-next-line no-unused-vars
  const { sideBarWidth } = dimension

  const [user, setUser] = useState({
    username: "Khách",
    email: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await requestApi(GET_ME, 'GET');
        if (response && response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  var logoutHandle = () => {
    requestApi('auth/logout', 'POST')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    window.location.href = 'http://localhost:5173/login'
  }
  return (
    <>
      <Box
        sx={{
          width: '100%',
          p: 0.5,
          borderRadius: { xs: 2, md: 3 },
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          background: "linear-gradient(135deg, rgba(144, 202, 249, 0.1) 0%, rgba(129, 199, 212, 0.1) 100%)",
          border: "1px solid rgba(144, 202, 249, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.2, md: 1.5 },
          transition: "all 0.3s ease"
        }}
      >
        {/* Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, md: 2 } }}>
          <Avatar
            sx={{
              bgcolor: "linear-gradient(135deg, #90caf9 0%, #81c7d4 100%)",
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 600,
              boxShadow: "0 4px 10px rgba(144, 202, 249, 0.3)"
            }}
          >
            {user.username ? user.username.charAt(0).toUpperCase() : "U"}
          </Avatar>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                color: '#1a1a1a',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {user.username}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '11px', sm: '12px', md: '13px' },
                color: "text.secondary",
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {user.email}
            </Typography>
          </Box>
        </Box>

        {/* Logout button */}
        <Button
          variant="outlined"
          startIcon={<LogoutIcon sx={{ fontSize: { xs: '18px', md: '20px' } }} />}
          sx={{
            textTransform: "none",
            borderRadius: { xs: 1.5, md: 2 },
            justifyContent: "flex-start",
            fontSize: { xs: '12px', md: '13px' },
            fontWeight: 500,
            borderColor: "rgba(144, 202, 249, 0.5)",
            color: "#519db1",
            transition: "all 0.3s ease",
            py: { xs: 1, md: 1.2 },
            "&:hover": {
              borderColor: "#519db1",
              backgroundColor: "rgba(81, 157, 177, 0.08)",
              transform: "translateX(4px)"
            }
          }}
          fullWidth
          onClick={logoutHandle}
        >
          Đăng xuất
        </Button>
      </Box>
    </>
  )
}

export default Account