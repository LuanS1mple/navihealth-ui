import { Box, Card, CardContent, Icon, Typography } from '@mui/material'
import React from 'react'

// eslint-disable-next-line no-unused-vars
function StatCard({ title, value,icon: Icon, bgColor }) {
  return (
    <Box sx={{width: '300px'}}>
      <Card sx={{ borderRadius: '16px', border: '1px solid rgba(134, 203, 222, 0.3)' }}>
        <CardContent sx={{ p: '25px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography sx={{ fontSize: '14px', color: '#4a5565', mb: '4px' }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#004aad' }}>
              {value}
            </Typography>
          </Box>
          <Box
            sx={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon size={24} color="#519DB1" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default StatCard