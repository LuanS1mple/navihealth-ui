import React from 'react'
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
  Box,
  Chip,
  Button,
} from '@mui/material';
import {
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Favorite as FavoriteIcon,
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

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" className="gradient-text">Quản lý người dùng</Typography>
        <Typography variant="body2" color="text.secondary">Danh sách và phân quyền người dùng hệ thống</Typography>
      </Box>

      {/* Stats row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Tổng người dùng"
            value={usersData.length}
            icon={<PersonAddIcon />}
            color="#155DFC"
            bgColor="#eff6ff"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Hoạt động"
            value={usersData.filter(u => u.status === 'active').length}
            icon={<CheckCircleIcon />}
            color="#00A63E"
            bgColor="#f0fdf4"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Bị khóa"
            value={usersData.filter(u => u.status === 'blocked').length}
            icon={<CancelIcon />}
            color="#E7000B"
            bgColor="#fef2f2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Premium"
            value={usersData.filter(u => u.premium !== 'Free').length}
            icon={<FavoriteIcon />}
            color="#F54900"
            bgColor="#fff7ed"
          />
        </Grid>
      </Grid>

      {/* Filters */}
      <Card sx={{ borderRadius: '20px', mb: 3 }} className="glass-card">
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField
              sx={{ flexGrow: 1, minWidth: '250px' }}
              size="small"
              placeholder="Tìm kiếm theo tên, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon size={18} color="#99A1AF" />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <MenuItem value="all">Tất cả trạng thái</MenuItem>
                <MenuItem value="active">Hoạt động</MenuItem>
                <MenuItem value="blocked">Bị khóa</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select value={packageFilter} onChange={(e) => setPackageFilter(e.target.value)}>
                <MenuItem value="all">Tất cả loại gói</MenuItem>
                <MenuItem value="premium">Premium</MenuItem>
                <MenuItem value="free">Free</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>

      {/* List users */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
        {filteredUsers.length === 0 && (
          <Typography sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            Không tìm thấy người dùng nào
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default UserManagement