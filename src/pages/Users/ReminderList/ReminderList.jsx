import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Grid
} from '@mui/material';
import {
  FileText,
  Calendar,
  Search,
} from 'lucide-react';
import StatCard from '../HealthRecordList/StatCard/StatCard';
import AddIcon from '@mui/icons-material/Add';
import Reminder from './Reminder/Reminder';

function ReminderList() {
  const reminders = [
    {
      id: 1,
      title: 'Uống thuốc huyết áp',
      category: 'Uống thuốc',
      description: 'Uống 1 viên Amlodipine 5mg sau bữa sáng',
      date: '2/11/2024',
      time: '08:00',
      frequency: 'Hàng ngày',
      enabled: true,
      icon: <Calendar size={24} />,
      iconBg: '#dbeafe',
      categoryColor: '#1447e6',
      categoryBg: '#dbeafe',
      categoryBorder: '#bedbff',
    },
    {
      id: 2,
      title: 'Tái khám tim mạch',
      category: 'Tái khám',
      description: 'Khám định kỳ tại phòng khám Tim mạch - BS. Trần Thị B',
      date: '15/11/2024',
      time: '14:30',
      frequency: 'Một lần',
      enabled: true,
      icon: <Calendar size={24} />,
      iconBg: '#dcfce7',
      categoryColor: '#008236',
      categoryBg: '#dcfce7',
      categoryBorder: '#b9f8cf',
    },
    {
      id: 3,
      title: 'Đo huyết áp',
      category: 'Đo chỉ số',
      description: 'Đo huyết áp vào buổi sáng và ghi lại kết quả',
      date: '2/11/2024',
      time: '07:00',
      frequency: 'Hàng ngày',
      enabled: true,
      icon: <Calendar size={24} />,
      iconBg: '#fef3c7',
      categoryColor: '#d97706',
      categoryBg: '#fef3c7',
      categoryBorder: '#fde68a',
    },
    {
      id: 4,
      title: 'Tập thể dục',
      category: 'Tập luyện',
      description: 'Đi bộ 30 phút hoặc tập yoga',
      date: '2/11/2024',
      time: '06:00',
      frequency: 'T2, T4, T6',
      enabled: false,
      icon: <Calendar size={24} />,
      iconBg: '#fce7f3',
      categoryColor: '#be185d',
      categoryBg: '#fce7f3',
      categoryBorder: '#fbcfe8',
    },
  ];


  return (
    <Box className="page-transition">
      <Box>
        <Typography variant="h4" className="gradient-text">Quản lý nhắc nhở</Typography>
        <Typography variant="body2" color="text.secondary">Theo dõi lịch uống thuốc và tái khám của bạn</Typography>
      </Box>

      {/* Tổng quan */}
      <Box sx={{ my: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StatCard
              title="Tổng nhắc nhở"
              value={reminders.length}
              icon={FileText}
              bgColor="rgba(0, 74, 173, 0.05)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard
              title="Đang hoạt động"
              value={reminders.filter(r => r.enabled).length}
              icon={Calendar}
              bgColor="rgba(81, 157, 177, 0.05)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard
              title="Hôm nay"
              value="2"
              icon={Calendar}
              bgColor="rgba(81, 157, 177, 0.05)"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Tìm kiếm & Thao tác */}
      <Card sx={{ borderRadius: '20px', mb: 3 }} className="glass-card">
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField
              sx={{ flexGrow: 1, minWidth: '200px' }}
              placeholder="Tìm kiếm nhắc nhở..."
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={18} color="#519db1" />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select defaultValue="all">
                <MenuItem value="all">Tất cả loại</MenuItem>
                <MenuItem value="medicine">Uống thuốc</MenuItem>
                <MenuItem value="checkup">Tái khám</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ px: 3, height: '40px' }}
            >
              Tạo nhắc nhở
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Danh sách bản ghi */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {reminders.map((reminder) => (
          <Reminder key={reminder.id} reminder={reminder} />
        ))}
      </Box>
    </Box>
  )
}

export default ReminderList