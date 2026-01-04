import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Switch,
  IconButton,
  Chip,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Avatar,
  Grid
} from '@mui/material';
import {
  FileText,
  Calendar,
  Upload,
  GitCompare,
  Search,
  Eye,
  Edit,
  Trash2,
  Filter,
} from 'lucide-react';
import StatCard from '../HealthRecordList/StatCard/StatCard';
import SideBar from '../../../components/SideBar/SideBar';
import TopHeader from '../../../components/HeadBar/HeadBar';
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
    <>
      <Box sx={{display: 'flex'}}>
        <SideBar/>
        <Box>
          <TopHeader/>
          <Box sx={{mx: 4}}>
            {/* tổng quan */}
            <Box sx={{my: 2}}>
              <Grid sx={{display: 'flex', gap: 2}} spacing={2 }>
                <Grid item xs={12} md={4} lg={3}>
                  <StatCard
                    title="Tổng nhắc nhở"
                    value="3"
                    icon={FileText}
                    bgColor="rgba(135, 199, 236, 0.2)"
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <StatCard
                    title="Đang hoạt động"
                    value="0"
                    icon={Calendar}
                    bgColor="rgba(81, 157, 177, 0.2)"
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <StatCard
                    title="Hôm nay"
                    value="0"
                    icon={Calendar}
                    bgColor="rgba(81, 157, 177, 0.2)"
                  />
                </Grid>
              </Grid>
            </Box>
            {/* tìm kiếm */}
            <Card
                sx={{
                  borderRadius: 4,
                  border: '1px solid rgba(134,203,222,0.3)',
                  boxShadow: 'none',
                  mb: 2,
                }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <TextField
                      fullWidth
                      placeholder="Tìm kiếm nhắc nhở..."
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search size={16} color="#99A1AF" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: '#f3f3f5',
                          borderRadius: 3,
                          '& fieldset': {
                            borderColor: 'rgba(134,203,222,0.3)',
                          },
                        },
                      }}
                  />
                    
                  <FormControl sx={{ minWidth: 180 }}>
                    <Select
                        sx={{
                          bgcolor: '#f3f3f5',
                          borderRadius: 3,
                          '& fieldset': {
                            borderColor: 'rgba(134,203,222,0.3)',
                          },
                        }}
                      >
                      <MenuItem value="all">Tất cả loại</MenuItem>
                      <MenuItem value="medicine">Uống thuốc</MenuItem>
                      <MenuItem value="checkup">Tái khám</MenuItem>
                      <MenuItem value="measurement">Đo chỉ số</MenuItem>
                      <MenuItem value="exercise">Tập luyện</MenuItem>
                    </Select>
                    </FormControl>

                    <FormControl sx={{ minWidth: 104 }}>
                      <Select
                        sx={{
                          bgcolor: '#f3f3f5',
                          borderRadius: 3,
                          '& fieldset': {
                            borderColor: 'rgba(134,203,222,0.3)',
                          },
                        }}
                      >
                        <MenuItem value="all">Tất cả</MenuItem>
                        <MenuItem value="active">Đang hoạt động</MenuItem>
                        <MenuItem value="inactive">Tạm dừng</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      variant="contained"
                      startIcon={<AddIcon size={16} />}
                      sx={{
                        background: 'linear-gradient(180deg, #519db1 0%, #004aad 100%)',
                        borderRadius: 3,
                        textTransform: 'none',
                        whiteSpace: 'nowrap',
                        width: '200px',
                        height: '50px',
                        px: 3,
                      }}
                    >
                      Tạo nhắc nhở
                    </Button>
                  </Box>
                </CardContent>
              </Card> 
            {/* bản ghi */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {reminders.map((reminder) => (<Reminder key={reminder.id} reminder={reminder}/>))}
              </Box>       
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ReminderList