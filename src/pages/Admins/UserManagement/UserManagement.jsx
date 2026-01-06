import { Box, Divider } from '@mui/material'
import React from 'react'
import SideBarAdmin from '../SideBar/SideBarAdmin'
import UserCard from '../../../components/UserCard/UserCard'
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  Avatar,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import {
  Search as SearchIcon,
  KeyboardArrowDown as ArrowDownIcon,
  MoreVert as MoreVertIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Favorite as FavoriteIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Description as DescriptionIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import StatCard from './StatCard/StatCard';
function UserManagement() {
  const usersData = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0901234567',
      documents: 12,
      status: 'active',
      premium: 'Premium 3 tháng',
      avatar: 'N',
      color: 'linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      email: 'tranthib@gmail.com',
      phone: '0912345678',
      documents: 8,
      status: 'active',
      premium: 'Premium 1 tháng',
      avatar: 'T',
      color: 'linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      email: 'levanc@gmail.com',
      phone: '0923456789',
      documents: 2,
      status: 'active',
      premium: 'Free',
      avatar: 'L',
      color: 'linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)',
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      email: 'phamthid@gmail.com',
      phone: '0934567890',
      documents: 25,
      status: 'blocked',
      premium: 'Premium 6 tháng',
      avatar: 'P',
      color: 'linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)',
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      email: 'hoangvane@gmail.com',
      phone: '0945678901',
      documents: 35,
      status: 'active',
      premium: 'Premium 2 tháng',
      avatar: 'H',
      color: 'linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)',
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [packageFilter, setPackageFilter] = React.useState('all');
  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' ||
      (statusFilter === 'active' && user.status === 'active') ||
      (statusFilter === 'blocked' && user.status === 'blocked');
    const matchesPackage = packageFilter === 'all' ||
      (packageFilter === 'premium' && user.premium !== 'Free') ||
      (packageFilter === 'free' && user.premium === 'Free');
    return matchesSearch && matchesStatus && matchesPackage;
  });
  const totalUsers = usersData.length;
  const activeUsers = usersData.filter(u => u.status === 'active').length;
  const blockedUsers = usersData.filter(u => u.status === 'blocked').length;
  const premiumUsers = usersData.filter(u => u.premium !== 'Free').length;
  return (
    <>
      <Box sx={{ display: 'flex', width: '100vw' }}>
        <SideBarAdmin />
        <Box sx={{ p: 3, width: '100%' }}>

          {/* header  */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ color: '#4a5565', textTransform: 'none' }}
              >
                Quay lại Dashboard
              </Button>
              <Divider orientation='vertical' sx={{ opacity: 0.9 }} flexItem></Divider>
              <Typography variant="h6" fontWeight="bold">
                Quản lý người dùng
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Avatar sx={{ width: 24, height: 24, bgcolor: '#1e293b' }}>A</Avatar>}
              sx={{
                backgroundColor: '#1e293b',
                borderRadius: 2,
                textTransform: 'none',
                px: 2,
              }}
            >
              ADMIN
            </Button>
          </Box>

          {/* Thống kê */}
          <Grid sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}>
            <Grid sx={{ width: '24%' }} item xs={12} sm={6} md={3}>
              <StatCard
                title="Tổng người dùng"
                value={totalUsers}
                icon={<PersonAddIcon />}
                color="#155DFC"
                bgColor="#eff6ff"
              />
            </Grid>
            <Grid sx={{ width: '24%' }} item xs={12} sm={6} md={3}>
              <StatCard
                title="Đang hoạt động"
                value={activeUsers}
                icon={<CheckCircleIcon />}
                color="#00A63E"
                bgColor="#f0fdf4"
              />
            </Grid>
            <Grid sx={{ width: '24%' }} item xs={12} sm={6} md={3}>
              <StatCard
                title="Bị khóa"
                value={blockedUsers}
                icon={<CancelIcon />}
                color="#E7000B"
                bgColor="#fef2f2"
              />
            </Grid>
            <Grid sx={{ width: '24%' }} item xs={12} sm={6} md={3}>
              <StatCard
                title="Premium"
                value={premiumUsers}
                icon={<FavoriteIcon />}
                color="#F54900"
                bgColor="#fff7ed"
              />
            </Grid>
          </Grid>


          {/* Filter  */}
          <Card sx={{ borderRadius: 4, border: '1px solid #e5e7eb', mb: 3 }}>
            <CardContent sx={{
              px: 1, "&:last-child": {
                pb: 2
              }
            }}>
              <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Grid sx={{ width: '70%' }} item xs={12} md={6}>
                  <TextField
                    fullWidth
                    placeholder="Tìm kiếm theo tên, email, ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: '#99A1AF' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      backgroundColor: '#f3f3f5',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 1.5,
                        '& fieldset': {
                          borderColor: '#d1d5dc',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid sx={{ width: '12%' }} item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <Select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      IconComponent={ArrowDownIcon}
                      sx={{
                        backgroundColor: '#f3f3f5',
                        borderRadius: 1.5,
                        '& fieldset': {
                          borderColor: '#d1d5dc',
                        },
                      }}
                    >
                      <MenuItem value="all">Tất cả</MenuItem>
                      <MenuItem value="active">Hoạt động</MenuItem>
                      <MenuItem value="blocked">Bị khóa</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid sx={{ width: '12%' }} item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <Select
                      value={packageFilter}
                      onChange={(e) => setPackageFilter(e.target.value)}
                      IconComponent={ArrowDownIcon}
                      sx={{
                        backgroundColor: '#f3f3f5',
                        borderRadius: 1.5,
                        '& fieldset': {
                          borderColor: '#d1d5dc',
                        },
                      }}
                    >
                      <MenuItem value="all">Tất cả gói</MenuItem>
                      <MenuItem value="premium">Premium</MenuItem>
                      <MenuItem value="free">Free</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>


          {/* List User */}
          <Box>
            {filteredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
            {filteredUsers.length === 0 && (
              <Card sx={{ borderRadius: 2, border: '1px solid #e5e7eb', p: 4, textAlign: 'center' }}>
                <Typography color="text.secondary">Không tìm thấy người dùng nào</Typography>
              </Card>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default UserManagement