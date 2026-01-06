import React from 'react'
import SideBarAdmin from '../SideBar/SideBarAdmin'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Grid,
  Paper,
  Button,
  Container,
  Divider,
  Badge as MuiBadge
} from '@mui/material';
import {
  Dashboard,
  People,
  Description,
  AttachMoney,
  TrendingUp,
  Person,
  Article,
  SmartToy,
  Payments,
  ArrowForward,
  CheckCircle
} from '@mui/icons-material';
function MainScreen() {
  const stats = [
    {
      title: 'Tổng người dùng',
      value: '2,847',
      change: '+12.5%',
      icon: <People />,
      color: '#EFF6FF',
      iconColor: '#155DFC'
    },
    {
      title: 'Hồ sơ đã upload',
      value: '15,234',
      change: '+8.2%',
      icon: <Description />,
      color: '#F0FDF4',
      iconColor: '#00A63E'
    },
    {
      title: 'Lượt sử dụng AI',
      value: '48,392',
      change: '+23.1%',
      icon: <SmartToy />,
      color: '#FAF5FF',
      iconColor: '#9810FA'
    },
    {
      title: 'Doanh thu tháng',
      value: '445.2M',
      change: '+15.8%',
      icon: <AttachMoney />,
      color: '#FEF3F2',
      iconColor: '#F79009'
    },
  ];
  const quickActions = [
    { id: 'users', text: 'Quản lý người dùng', icon: <People /> },
    { id: 'records', text: 'Quản lý hồ sơ', icon: <Description /> },
    { id: 'revenue', text: 'Quản lý doanh thu', icon: <AttachMoney /> },
    { id: 'settings', text: 'Cài đặt hệ thống', icon: <Dashboard /> },
  ];
  const newUsers = [
    { name: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', status: 'Hoạt động', badge: 'Premium 3 tháng' },
    { name: 'Trần Thị B', email: 'tranb@gmail.com', status: 'Hoạt động', badge: 'Premium 1 tháng' },
    { name: 'Lê Văn C', email: 'levanc@gmail.com', status: 'Hoạt động', badge: 'Free' },
    { name: 'Phạm Thị D', email: 'phamd@gmail.com', status: 'Không hoạt động', badge: 'Premium 6 tháng' },
    { name: 'Hoàng Văn E', email: 'hoange@gmail.com', status: 'Hoạt động', badge: 'Premium 1 tháng' },
  ];
  const recentRecords = [
    { title: 'Xét nghiệm máu', user: 'Nguyễn Văn A', status: 'Đã duyệt', date: '2024-11-01 14:30' },
    { title: 'Đơn thuốc', user: 'Trần Thị B', status: 'Đã duyệt', date: '2024-11-01 11:20' },
    { title: 'Chụp X-quang', user: 'Lê Văn C', status: 'Chưa duyệt', date: '2024-10-31 16:45' },
    { title: 'Kết quả siêu âm', user: 'Phạm Thị D', status: 'Đã duyệt', date: '2024-10-31 09:15' },
    { title: 'Báo cáo tim mạch', user: 'Hoàng Văn E', status: 'Đã duyệt', date: '2024-10-30 15:50' },
  ];

  return (
    <>
      <Box sx={{
        display: 'flex',
        width: '100vw'
      }}>
        <SideBarAdmin />
        <Box
          sx={{
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: 'white',
              borderBottom: '1px solid #E5E7EB',
              p: 2,
              width: '100%'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h5" fontWeight="bold" color="#101828" gutterBottom>
                  Tổng quan hệ thống
                </Typography>
                <Typography variant="body2" color="#4A5565">
                  Theo dõi và quản lý toàn bộ hoạt động NAVI HEALTH
                </Typography>
              </Box>
              <Chip
                icon={<CheckCircle sx={{ fontSize: 16 }} />}
                label="Hệ thống hoạt động tốt"
                sx={{
                  bgcolor: '#F0FDF4',
                  color: '#00A63E',
                  border: '1px solid #B9F8CF',
                  fontWeight: 'normal',
                }}
              />
            </Box>
          </Box>

          {/* Content */}
          <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Stats Cards */}
            <Grid  sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 3 }}>
              {stats.map((stat, index) => (
                <Grid sx={{width: '23%'}} item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            bgcolor: stat.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: stat.iconColor,
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Chip
                          icon={<TrendingUp sx={{ fontSize: 14 }} />}
                          label={stat.change}
                          size="small"
                          sx={{
                            bgcolor: '#F0FDF4',
                            color: '#00A63E',
                            border: '1px solid #B9F8CF',
                            height: 22,
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="#4A5565" gutterBottom>
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" fontWeight="bold" color="#101828">
                        {stat.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Quick Actions */}
            <Box sx={{ mb: 3,ml: 1.5, borderRadius: '16px', border: '1px solid #E5E7EB', width: '96%', p: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="#101828" gutterBottom>
                Thao tác nhanh
              </Typography>
              <Typography variant="body2" color="#4A5565" sx={{ mb: 2 }}>
                Truy cập các chức năng quản lý chính
              </Typography>
              <Grid sx={{display: 'flex', justifyContent: 'space-between'}}>
                {quickActions.map((action) => (
                  <Grid sx={{width: '24%'}} item xs={12} sm={6} md={3} key={action.id}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={action.icon}
                      endIcon={<ArrowForward />}
                      sx={{
                        justifyContent: 'space-between',
                        p: 2,
                        borderRadius: '12px',
                        border: '1px solid #E5E7EB',
                        color: '#364153',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: '#F9FAFB',
                          border: '1px solid #E5E7EB',
                        },
                      }}
                    >
                      {action.text}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Lists */}
            <Grid sx={{display: 'flex', justifyContent: 'space-between', ml: 1.5, pr: 2}} >
              {/* New Users */}
              <Grid sx={{width: '49%'}} item xs={12} md={6}>
                <Paper sx={{ p: 3, borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="#101828">
                        Người dùng mới
                      </Typography>
                      <Typography variant="body2" color="#4A5565">
                        5 người dùng đăng ký gần nhất
                      </Typography>
                    </Box>
                    <Button size="small" endIcon={<ArrowForward />}>
                      Xem tất cả
                    </Button>
                  </Box>
                  <List>
                    {newUsers.map((user, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <Divider />}
                        <ListItem sx={{ py: 2, px: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <Avatar
                              sx={{
                                bgcolor: '#155DFC',
                                mr: 2,
                                width: 40,
                                height: 40,
                              }}
                            >
                              {user.name.charAt(0)}
                            </Avatar>
                            <Box sx={{ flexGrow: 1 }}>
                              <Typography variant="body2" fontWeight="bold" color="#101828">
                                {user.name}
                              </Typography>
                              <Typography variant="caption" color="#6A7282">
                                {user.email}
                              </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                              <Chip
                                label={user.status}
                                size="small"
                                sx={{
                                  bgcolor: user.status === 'Hoạt động' ? '#F0FDF4' : '#FEF3F2',
                                  color: user.status === 'Hoạt động' ? '#00A63E' : '#D92D20',
                                  fontSize: '12px',
                                  height: 20,
                                  mb: 0.5,
                                }}
                              />
                              <Typography variant="caption" display="block" color="#6A7282">
                                {user.badge}
                              </Typography>
                            </Box>
                          </Box>
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              </Grid>

              {/* Recent Records */}
              <Grid sx={{width: '49%'}} item xs={12} md={6}>
                <Paper sx={{ p: 3, borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="#101828">
                        Hồ sơ mới nhất
                      </Typography>
                      <Typography variant="body2" color="#4A5565">
                        Hồ sơ được upload gần đây
                      </Typography>
                    </Box>
                    <Button size="small" endIcon={<ArrowForward />}>
                      Xem tất cả
                    </Button>
                  </Box>
                  <List>
                    {recentRecords.map((record, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <Divider />}
                        <ListItem sx={{ py: 2, px: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '8px',
                                bgcolor: '#EFF6FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                              }}
                            >
                              <Article sx={{ color: '#155DFC', fontSize: 20 }} />
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                              <Typography variant="body2" fontWeight="bold" color="#101828">
                                {record.title}
                              </Typography>
                              <Typography variant="caption" color="#6A7282">
                                {record.user}
                              </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                              <Chip
                                label={record.status}
                                size="small"
                                sx={{
                                  bgcolor: record.status === 'Đã duyệt' ? '#F0FDF4' : '#FEF3F2',
                                  color: record.status === 'Đã duyệt' ? '#00A63E' : '#F79009',
                                  fontSize: '12px',
                                  height: 20,
                                  mb: 0.5,
                                }}
                              />
                              <Typography variant="caption" display="block" color="#6A7282">
                                {record.date}
                              </Typography>
                            </Box>
                          </Box>
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default MainScreen