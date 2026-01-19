import React from 'react'
import { Box } from "@mui/material"
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  IconButton,
  Divider,
  Badge,
  LinearProgress,
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
  Favorite,
  Speed,
  WaterDrop,
  FitnessCenter,
  ChevronRight,
  Notifications,
  CalendarMonth,
  MedicalServices,
  Star,
  CheckCircle,
} from '@mui/icons-material';

function Main() {

  const healthStats = [
    {
      title: 'Nhịp tim',
      value: '72 bpm',
      status: 'Bình thường',
      statusColor: '#dcfce7',
      statusTextColor: '#008236',
      icon: <Favorite />,
      iconBg: 'rgba(135,199,236,0.1)',
      iconColor: '#004AAD',
    },
    {
      title: 'Huyết áp',
      value: '120/80',
      status: 'Tốt',
      statusColor: '#dcfce7',
      statusTextColor: '#008236',
      icon: <Speed />,
      iconBg: 'rgba(135,199,236,0.1)',
      iconColor: '#004AAD',
    },
    {
      title: 'Đường huyết',
      value: '95 mg/dL',
      status: 'Bình thường',
      statusColor: '#dcfce7',
      statusTextColor: '#008236',
      icon: <WaterDrop />,
      iconBg: 'rgba(135,199,236,0.1)',
      iconColor: '#004AAD',
    },
    {
      title: 'Cân nặng',
      value: '68 kg',
      status: 'Vẫ sóng bình thường',
      statusColor: '#e8f5e9',
      statusTextColor: '#2e7d32',
      icon: <FitnessCenter />,
      iconBg: 'rgba(135,199,236,0.1)',
      iconColor: '#004AAD',
    },
  ];

  const reminders = [
    {
      title: 'Paracetamol 500mg',
      time: '3 viên sau bữa sáng',
      date: '05/03',
      status: 'done',
    },
    {
      title: 'Vitamin D3',
      time: '1 viên sau bữa sáng',
      date: '05/03',
      status: 'pending',
    },
    {
      title: 'Omega-3 Fish Oil',
      time: '1 viên sau bữa tối',
      date: '05/03',
      status: 'pending',
    },
  ];

  const appointments = [
    {
      title: 'Khám tổng quát',
      doctor: 'Bác sĩ Nguyễn Thị B',
      date: '05/03',
      time: '10:00 AM - 05/10/2025',
    },
    {
      title: 'Xét nghiệm máu',
      room: 'Phòng xét nghiệm A',
      date: '06/03',
      time: '08:00 AM - 06/10/2025',
    },
  ];
  return (
    <>
      <Box>
        {/* Quick Info Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography sx={{ color: '#004aad', fontSize: 16 }}>Thông tin nhanh</Typography>
            <Button
              endIcon={<ChevronRight />}
              sx={{
                textTransform: 'none',
                color: '#519db1',
                '&:hover': { bgcolor: 'transparent' },
              }}
            >
              Xem chi tiết
            </Button>
          </Box>
          <Grid container spacing={2}>
            {healthStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Typography sx={{ color: '#4a5565', fontSize: 14 }}>{stat.title}</Typography>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: stat.iconBg,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: stat.iconColor,
                        }}
                      >
                        {stat.icon}
                      </Box>
                    </Box>
                    <Typography sx={{ color: '#004aad', fontSize: 16, mb: 0.5 }}>
                      {stat.value}
                    </Typography>
                    <Chip
                      label={stat.status}
                      size="small"
                      sx={{
                        bgcolor: stat.statusColor,
                        color: stat.statusTextColor,
                        fontSize: 12,
                        height: 22,
                        borderRadius: '8px',
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Two Column Layout */}
        <Grid container spacing={2}>
          {/* Left Column - Reminders */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: '16px',
                boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
                minHeight: '400px',
                maxHeight: '400px'
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography sx={{ color: '#004aad', fontSize: 16 }}>Lịch nhắc nhở</Typography>
                  <Button
                    endIcon={<ChevronRight />}
                    sx={{
                      textTransform: 'none',
                      color: '#519db1',
                      fontSize: 14,
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                  >
                    Quản lý
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <MedicalServices sx={{ color: '#004aad' }} />
                  <Typography>Nhắc nhở thuốc</Typography>
                </Box>
                <Box>
                  {reminders.map((reminder, index) => (
                    <Box key={index}>
                      <Box sx={{ display: 'flex', gap: 2, py: 2 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: reminder.status === 'done' ? '#004aad' : '#f3f4f6',
                            color: reminder.status === 'done' ? 'white' : '#6b7280',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Typography>{reminder.date}</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography sx={{ fontSize: 14, mb: 0.5 }}>{reminder.title}</Typography>
                          <Typography sx={{ fontSize: 12, color: '#6b7280' }}>
                            {reminder.time}
                          </Typography>
                          {reminder.status === 'done' && (
                            <Chip
                              label="Đã uống"
                              size="small"
                              sx={{
                                bgcolor: '#004aad',
                                color: 'white',
                                fontSize: 10,
                                height: 20,
                                mt: 0.5,
                              }}
                            />
                          )}
                        </Box>
                        {reminder.status === 'done' && (
                          <CheckCircle sx={{ color: '#10b981', fontSize: 20 }} />
                        )}
                      </Box>
                      {index < reminders.length - 1 && <Divider />}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Appointments */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: '16px',
                boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
                minHeight: '400px',
                maxHeight: '400px'
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography sx={{ color: '#004aad', fontSize: 16 }}>Lịch hẹn khám</Typography>
                  <Button
                    endIcon={<ChevronRight />}
                    sx={{
                      textTransform: 'none',
                      color: '#519db1',
                      fontSize: 14,
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                  >
                    Xem tất cả
                  </Button>
                </Box>
                <Box>
                  {appointments.map((appointment, index) => (
                    <Box key={index}>
                      <Box sx={{ display: 'flex', gap: 2, py: 2 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: '#004aad',
                            color: 'white',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Typography fontSize={14}>{appointment.date}</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography sx={{ fontSize: 14, mb: 0.5 }}>{appointment.title}</Typography>
                          <Typography sx={{ fontSize: 12, color: '#6b7280' }}>
                            {appointment.doctor || appointment.room}
                          </Typography>
                          <Typography sx={{ fontSize: 12, color: '#6b7280' }}>
                            {appointment.time}
                          </Typography>
                        </Box>
                      </Box>
                      {index < appointments.length - 1 && <Divider />}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Premium Service Card */}
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ color: '#004aad', fontSize: 16, mb: 2 }}>Gói dịch vụ</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: '16px',
                  boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
                  height: '200px'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <MedicalServices sx={{ color: '#004aad' }} />
                    <Typography>Gói miễn phí</Typography>
                  </Box>
                  <Typography sx={{ fontSize: 14, color: '#6b7280', mb: 2 }}>Đang sử dụng</Typography>
                  <Box sx={{ mb: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography sx={{ fontSize: 12 }}>Hồ sơ sức khỏe</Typography>
                      <Typography sx={{ fontSize: 12 }}>1/2</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={50} sx={{ height: 6, borderRadius: 3 }} />
                  </Box>
                  <Typography sx={{ fontSize: 12, color: '#6b7280', mt: 2 }}>
                    ✓ Gọi video với bác sĩ (1/2 lượt)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  color: 'white',
                  height: '200px',
                  boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Star sx={{ color: '#fbbf24' }} />
                    <Typography>Nâng cấp Premium</Typography>
                  </Box>
                  <Typography sx={{ fontSize: 28, mb: 0.5 }}>
                    94,000₫<Typography component="span" sx={{ fontSize: 14 }}>/tháng</Typography>
                  </Typography>
                  <Typography sx={{ fontSize: 12, mb: 1, opacity: 0.9 }}>
                    ✓ Scan & upload không giới hạn hồ sơ
                  </Typography>
                  <Typography sx={{ fontSize: 12, opacity: 0.9 }}>
                    ✓ Tư vấn sức khỏe trực tuyến với chuyên gia
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Main