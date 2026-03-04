import React from 'react'
import { Box, Typography } from '@mui/material'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

function Logo({ dimension = {} }) {
  const { logoHeight = '80px' } = dimension

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      height: logoHeight,
      alignItems: 'center',
      px: 3,
      gap: 1.5,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Glow Effect */}
      <Box sx={{
        position: 'absolute',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(81, 157, 177, 0.15) 0%, rgba(81, 157, 177, 0) 70%)',
        top: '50%',
        left: '10%',
        transform: 'translateY(-50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Icon Container with Gradient Background */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #004aad 0%, #519db1 100%)',
        boxShadow: '0 4px 12px rgba(0, 74, 173, 0.25)',
        position: 'relative',
        zIndex: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'rotate(-5deg) scale(1.05)',
          boxShadow: '0 6px 16px rgba(0, 74, 173, 0.35)',
        }
      }}>
        <HealthAndSafetyIcon sx={{ color: '#fff', fontSize: '1.6rem' }} />
      </Box>

      {/* Text Container */}
      <Box sx={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
        <Typography sx={{
          fontSize: '1.25rem',
          fontWeight: 800,
          letterSpacing: '0.05rem',
          background: 'linear-gradient(90deg, #004aad 0%, #519db1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.1,
          fontFamily: "'Outfit', 'Inter', sans-serif",
          textTransform: 'uppercase'
        }}>
          NAVI
        </Typography>
        <Typography sx={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: '#64748b',
          letterSpacing: '0.2rem',
          lineHeight: 1,
          mt: 0.2,
          textTransform: 'uppercase',
          opacity: 0.8
        }}>
          HEALTH
        </Typography>
      </Box>

      {/* Bottom Border/Accent Decor */}
      <Box sx={{
        position: 'absolute',
        bottom: '15%',
        right: '15%',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        bgcolor: '#519db1',
        animation: 'pulse 2s infinite',
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)', opacity: 0.5 },
          '50%': { transform: 'scale(1.5)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0.5 },
        }
      }} />
    </Box>
  )
}

export default Logo
