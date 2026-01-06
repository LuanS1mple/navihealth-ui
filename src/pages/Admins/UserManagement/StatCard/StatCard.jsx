import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';


function StatCard({ title, value, icon, color, bgColor }) {
  return (
    <Card sx={{ height: '100%', borderRadius: 2, border: '1px solid #e5e7eb' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            {value}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 1.5,
            backgroundColor: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {React.cloneElement(icon, { sx: { color, fontSize: 24 } })}
        </Box>
      </CardContent>
    </Card>
  )
}

export default StatCard