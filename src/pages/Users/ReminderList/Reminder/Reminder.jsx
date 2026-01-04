import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  IconButton,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Calendar,
} from 'lucide-react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


function Reminder({reminder}) {
  console.log(reminder)
  const handleToggle = (id) => {
    console.log('Toggle reminder:', id);
  };
  return (
    <>
    <Card
              key={reminder.id}
              sx={{
                borderRadius: 4,
                border: '1px solid rgba(134,203,222,0.3)',
                boxShadow: 'none',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  {/* Icon */}
                  <Avatar
                    sx={{
                      bgcolor: reminder.iconBg,
                      width: 48,
                      height: 48,
                      color: '#0a0a0a',
                    }}
                  >
                    {reminder.icon}
                  </Avatar>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6" color="#004aad">
                        {reminder.title}
                      </Typography>
                      <Chip
                        label={reminder.category}
                        size="small"
                        sx={{
                          bgcolor: reminder.categoryBg,
                          color: reminder.categoryColor,
                          border: `1px solid ${reminder.categoryBorder}`,
                          fontSize: '12px',
                          height: 22,
                        }}
                      />
                    </Box>

                    <Typography variant="body2" color="#4a5565" sx={{ mb: 1 }}>
                      {reminder.description}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Calendar size={12} color="#4a5565" />
                        <Typography variant="body2" color="#4a5565">
                          {reminder.date}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <Typography variant="body2" color="#4a5565">
                          {reminder.time}
                        </Typography>
                      </Box>

                      <Chip
                        label={reminder.frequency}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '12px',
                          height: 22,
                          borderColor: 'rgba(0,0,0,0.1)',
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Toggle and Menu */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Switch
                      checked={reminder.enabled}
                      onChange={() => handleToggle(reminder.id)}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#fff',
                          '& + .MuiSwitch-track': {
                            backgroundColor: '#519db1',
                          },
                        },
                      }}
                    />
                    <IconButton size="small">
                      <DragIndicatorIcon size={16} />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            </>
  )
}

export default Reminder