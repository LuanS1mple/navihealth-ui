import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Button,
  Avatar,
  Chip,
  LinearProgress,
  FormControl,
  Box,
} from '@mui/material';
import {
  TrendingUp,
  CalendarToday,
  Download,
} from '@mui/icons-material';

function DashBoard() {
  const [selectedMonth, setSelectedMonth] = useState('Tháng này');
  const packageData = [
    {
      name: 'Gói 1 tháng',
      price: '94.000 ₫',
      users: 524,
      revenue: '49.256.000 ₫',
      growth: '+12.5%',
      percentage: 37.1,
      color: '#155DFC',
      bgColor: '#EFF6FF',
    },
    {
      name: 'Gói 2 tháng',
      price: '169.000 ₫',
      users: 287,
      revenue: '48.503.000 ₫',
      growth: '+18.3%',
      percentage: 20.3,
      color: '#00A63E',
      bgColor: '#F0FDF4',
    },
    {
      name: 'Gói 3 tháng',
      price: '199.000 ₫',
      users: 412,
      revenue: '81.988.000 ₫',
      growth: '+24.7%',
      percentage: 29.2,
      color: '#9810FA',
      bgColor: '#FAF5FF',
    },
    {
      name: 'Gói 6 tháng',
      price: '349.000 ₫',
      users: 189,
      revenue: '65.961.000 ₫',
      growth: '+15.2%',
      percentage: 13.4,
      color: '#F54900',
      bgColor: '#FFF7ED',
    },
  ];

  const recentTransactions = [
    {
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      package: 'Premium 3 tháng',
      amount: '199.000 ₫',
      status: 'Thành công',
      date: '2024-11-01 14:30',
    },
    {
      name: 'Trần Thị B',
      email: 'tranthib@gmail.com',
      package: 'Premium 1 tháng',
      amount: '94.000 ₫',
      status: 'Thành công',
      date: '2024-10-31 09:15',
    },
    {
      name: 'Lê Văn C',
      email: 'levanc@gmail.com',
      package: 'Premium 6 tháng',
      amount: '349.000 ₫',
      status: 'Đang xử lý',
      date: '2024-10-30 16:45',
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" className="gradient-text">Quản lý doanh thu</Typography>
          <Typography variant="body2" color="text.secondary">Thống kê tài chính và các gói dịch vụ</Typography>
        </Box>
        <Button variant="outlined" startIcon={<Download />} sx={{ borderRadius: '10px' }}>
          Xuất báo cáo
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Revenue Card */}
        <Grid item xs={12} md={8}>
          <Card className="glass-card" sx={{ height: '100%', borderRadius: '20px' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="body2" color="text.secondary">Tổng doanh thu</Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>245.708.000 ₫</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip label="+18.5%" size="small" icon={<TrendingUp />} color="success" />
                <Typography variant="body2" color="text.secondary">so với tháng trước</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Filter Card */}
        <Grid item xs={12} md={4}>
          <Card className="glass-card" sx={{ height: '100%', borderRadius: '20px' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Thời gian</Typography>
              <FormControl fullWidth size="small">
                <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                  <MenuItem value="Tháng này">Tháng này</MenuItem>
                  <MenuItem value="Tháng trước">Tháng trước</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* Package list */}
        {packageData.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: '16px' }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">{pkg.name}</Typography>
                <Typography variant="h5" color="primary" sx={{ mb: 2 }}>{pkg.price}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" color="text.secondary">Tỉ lệ: {pkg.percentage}%</Typography>
                  <LinearProgress variant="determinate" value={pkg.percentage} sx={{ mt: 1, height: 6, borderRadius: 3 }} />
                </Box>
                <Typography variant="body2">Doanh thu: {pkg.revenue}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Transactions */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: '20px' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Giao dịch gần đây</Typography>
              {recentTransactions.map((t, i) => (
                <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: i < recentTransactions.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <Box>
                    <Typography variant="body2" fontWeight={600}>{t.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{t.package}</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" fontWeight={600}>{t.amount}</Typography>
                    <Typography variant="caption" color="text.secondary">{t.status}</Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashBoard