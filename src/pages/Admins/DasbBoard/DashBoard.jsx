import { Box } from '@mui/material'
import SideBar from '../../../components/SideBar/SideBar'
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

  // Dữ liệu giao dịch gần đây
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
    {
      name: 'Phạm Thị D',
      email: 'phamthid@gmail.com',
      package: 'Premium 3 tháng',
      amount: '199.000 ₫',
      status: 'Thành công',
      date: '2024-10-30 11:20',
    },
    {
      name: 'Hoàng Văn E',
      email: 'hoangvane@gmail.com',
      package: 'Premium 1 tháng',
      amount: '199.000 ₫',
      status: 'Thành công',
      date: '2024-10-28 08:05',
    },
  ];
  return (
    <>
      <Box sx={{ display: 'flex', width: `calc(100vw - 20px)`, justifyContent: 'space-between'}}>
        <SideBar></SideBar>
        <Box sx={{ width: '100%', ml: 2}}>
          <Box sx={{ display: 'flex',alignItems: 'center', mb: 3,mt: 1 , gap: 2, mx: 2 }}>
            <Typography variant="body2" color="text.secondary">
              ← Quay lại Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              /
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              Quản lý doanh thu
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Avatar sx={{ bgcolor: '#101828', width: 32, height: 32 }}>
              <Typography variant="caption" color="white">
                AD
              </Typography>
            </Avatar>
            <Typography variant="body2" fontWeight={600}>
              ADMIN
            </Typography>
          </Box>
          <Grid sx={{display: 'flex', flexDirection: 'column'}}>
            {/* Left Section - Revenue Overview */}
            <Grid sx={{display: 'flex', justifyContent: 'space-between', mb: 3}}>
              <Grid sx={{width: '70%'}} item xs={12} md={8}>
                <Card sx={{ borderRadius: 2, border: '1px solid #E5E7EB', height: '280px' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Tổng doanh thu
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                          245.708.000 ₫
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Chip
                            label="+18.5%"
                            size="small"
                            icon={<TrendingUp sx={{ fontSize: 14 }} />}
                            sx={{
                              bgcolor: '#F0FDF4',
                              color: '#00A63E',
                              border: '1px solid #B9F8CF',
                              fontWeight: 500,
                              '& .MuiChip-icon': { color: '#00A63E' },
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            so với tháng trước
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #00C950 0%, #00A63E 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                          <path
                            d="M16 2.66667V29.3333"
                            stroke="white"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            stroke="white"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                    </Box>

                    {/* Statistics Row */}
                    <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid #E5E7EB', display: 'flex', gap: 2 }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Trung bình mỗi gói
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          61.427.000 ₫
                        </Typography>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Tổng người dùng trả phí
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          1.412
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Right Section - Filters */}
              <Grid sx={{width: '29%'}} item xs={12} md={4}>
                <Card sx={{ borderRadius: 2, border: '1px solid #E5E7EB',height: '280px' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Lọc theo thời gian
                    </Typography>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <Select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        startAdornment={
                          <CalendarToday sx={{ fontSize: 16, mr: 1, color: '#717182' }} />
                        }
                        sx={{
                          bgcolor: '#F3F3F5',
                          borderRadius: 1.5,
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#D1D5DC',
                          },
                        }}
                      >
                        <MenuItem value="Tháng này">Tháng này</MenuItem>
                        <MenuItem value="Tháng trước">Tháng trước</MenuItem>
                        <MenuItem value="3 tháng gần đây">3 tháng gần đây</MenuItem>
                        <MenuItem value="6 tháng gần đây">6 tháng gần đây</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Download />}
                      sx={{
                        borderRadius: 1.5,
                        borderColor: '#D1D5DC',
                        color: '#0A0A0A',
                        textTransform: 'none',
                        py: 1,
                      }}
                    >
                      Xuất báo cáo
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {/* Package Revenue Section */}
            <Grid sx={{mb: 3}} item xs={12}>
              <Card sx={{ borderRadius: 2, border: '1px solid #E5E7EB' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Doanh thu theo gói
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Phân tích chi tiết từng gói dịch vụ Premium
                      </Typography>
                    </Box>
                    <TrendingUp sx={{ fontSize: 24, color: '#FF6900' }} />
                  </Box>

                  <Grid sx={{display: 'flex', justifyContent: 'space-between'}} spacing={2}>
                    {packageData.map((pkg, index) => (
                      <Grid sx={{width:'24%'}} item xs={12} sm={6} key={index}>
                        <Card
                          sx={{
                            borderRadius: 2,
                            border: '1px solid #E5E7EB',
                            height: '100%',
                          }}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                              <Box>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                  {pkg.name}
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" color="text.secondary">
                                  {pkg.price}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: 48,
                                  height: 48,
                                  borderRadius: 1.5,
                                  bgcolor: pkg.bgColor,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path
                                    stroke={pkg.color}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12 22V12"
                                    stroke={pkg.color}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M3.29 7L12 12L20.71 7"
                                    stroke={pkg.color}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 4.27L16.5 9.42"
                                    stroke={pkg.color}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Box>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                              <Typography variant="body2" color="text.secondary">
                                Số người dùng
                              </Typography>
                              <Typography variant="subtitle2" fontWeight="bold">
                                {pkg.users}
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                              <Typography variant="body2" color="text.secondary">
                                Doanh thu
                              </Typography>
                              <Typography variant="subtitle2" fontWeight="bold">
                                {pkg.revenue}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: 1.5,
                                borderTop: '1px solid #F3F4F6',
                              }}
                            >
                              <Typography variant="body2" color="text.secondary">
                                Tăng trưởng
                              </Typography>
                              <Chip
                                label={pkg.growth}
                                size="small"
                                icon={<TrendingUp sx={{ fontSize: 12 }} />}
                                sx={{
                                  bgcolor: '#F0FDF4',
                                  color: '#00A63E',
                                  border: '1px solid #B9F8CF',
                                  fontSize: 12,
                                  height: 22,
                                  '& .MuiChip-icon': { color: '#00A63E' },
                                }}
                              />
                            </Box>

                            <Box sx={{ mt: 2 }}>
                              <LinearProgress
                                variant="determinate"
                                value={pkg.percentage}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  bgcolor: '#F3F4F6',
                                  '& .MuiLinearProgress-bar': {
                                    bgcolor: pkg.color,
                                    borderRadius: 4,
                                  },
                                }}
                              />
                              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                                {pkg.percentage}% tổng số người dùng
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Recent Transactions */}
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 2, border: '1px solid #E5E7EB' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Giao dịch gần đây
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Danh sách giao dịch mới nhất
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: 1,
                        borderColor: 'rgba(0,0,0,0.1)',
                        color: '#0A0A0A',
                        textTransform: 'none',
                      }}
                    >
                      Xem tất cả
                    </Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {recentTransactions.map((transaction, index) => (
                      <Card
                        key={index}
                        sx={{
                          borderRadius: 1.5,
                          border: '1px solid #E5E7EB',
                        }}
                      >
                        <CardContent sx={{ p: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                              <Avatar
                                sx={{
                                  width: 40,
                                  height: 40,
                                  bgcolor: '#EFF6FF',
                                  borderRadius: 1.25,
                                }}
                              >
                                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                  <path
                                    d="M10 1.66667V18.3333"
                                    stroke="#155DFC"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    stroke="#155DFC"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Avatar>
                              <Box>
                                <Typography variant="subtitle2" fontWeight="bold">
                                  {transaction.name}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                  <Typography variant="body2" color="text.secondary">
                                    {transaction.email}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    •
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {transaction.package}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box sx={{ textAlign: 'right' }}>
                              <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {transaction.amount}
                              </Typography>
                              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Chip
                                  label={transaction.status}
                                  size="small"
                                  sx={{
                                    bgcolor:
                                      transaction.status === 'Thành công' ? '#F0FDF4' : '#FFF7ED',
                                    color: transaction.status === 'Thành công' ? '#00A63E' : '#F54900',
                                    border:
                                      transaction.status === 'Thành công'
                                        ? '1px solid #B9F8CF'
                                        : '1px solid #FFD8B8',
                                    fontSize: 12,
                                    height: 22,
                                  }}
                                />
                                <Typography variant="caption" color="text.secondary">
                                  {transaction.date}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default DashBoard