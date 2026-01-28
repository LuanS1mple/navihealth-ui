import React from 'react'
import {
  Box,
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
  List,
  ListItem
} from '@mui/material';
import {
  People,
  Description,
  AttachMoney,
  TrendingUp,
  Article,
  SmartToy,
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
    { id: 'settings', text: 'Cài đặt hệ thống', icon: <TrendingUp /> },
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
    <Box>
      {/* Header Info */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" className="gradient-text">Tổng quan hệ thống</Typography>
          <Typography variant="body2" color="text.secondary">Theo dõi toàn bộ hoạt động của NAVI HEALTH</Typography>
        </Box>
        <Chip
          icon={<CheckCircle sx={{ fontSize: 16 }} />}
          label="Hệ thống ổn định"
          color="success"
          variant="outlined"
          sx={{ borderRadius: '8px' }}
        />
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: '16px' }} className="glass-card">
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
                  <Typography variant="caption" sx={{ color: '#00A63E', fontWeight: 600 }}>
                    {stat.change}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Lists Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className="glass-card" sx={{ p: 3, borderRadius: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" fontWeight="bold">Người dùng mới</Typography>
              <Button size="small" endIcon={<ArrowForward />}>Xem hết</Button>
            </Box>
            <List disablePadding>
              {newUsers.map((user, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1.5, borderBottom: index < newUsers.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <Avatar sx={{ bgcolor: '#004aad', mr: 2 }}>{user.name[0]}</Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" fontWeight={600}>{user.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{user.email}</Typography>
                  </Box>
                  <Chip label={user.badge} size="small" sx={{ fontSize: '10px' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="glass-card" sx={{ p: 3, borderRadius: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" fontWeight="bold">Hồ sơ gần đây</Typography>
              <Button size="small" endIcon={<ArrowForward />}>Xem hết</Button>
            </Box>
            <List disablePadding>
              {recentRecords.map((record, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1.5, borderBottom: index < recentRecords.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <Box sx={{ width: 40, height: 40, bgcolor: 'rgba(81, 157, 177, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Article sx={{ color: '#519db1' }} />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" fontWeight={600}>{record.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{record.user}</Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">{record.date.split(' ')[0]}</Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainScreen