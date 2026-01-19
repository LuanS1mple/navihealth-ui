import React from 'react'
import { Box, Button, Tooltip, Typography } from '@mui/material'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
function Logo({ dimension }) {
  const { sideBarWidth, logoHeight } = dimension
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      height: logoHeight,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    }}>
      <HealthAndSafetyIcon sx={{ scale: 1.2 }} />
      <Typography sx={{
        fontSize: '1.2rem'
      }}>
        NAVI HEALTH
      </Typography>
    </Box>
  )
}

export default Logo