import React from 'react'
import HealthRecord from '../../../components/HealthRecord/HealthRecord';
import SideBar from '../../../components/SideBar/SideBar';
import TopHeader from '../../../components/HeadBar/HeadBar';
import { Box } from '@mui/material';
import StatCard from './StatCard/StatCard';
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
import {
  Card,
  CardContent,
  TextField,
  Button,
  Chip,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  Typography,
  Grid,
} from '@mui/material';
function HealthRecordList() {
   const records = [
    {
      id: 1,
      title: 'Xét nghiệm máu tổng quát',
      type: 'Kết quả xét nghiệm',
      date: '15/10/2024',
      doctor: 'BS. Nguyễn Văn A',
      facility: 'Bệnh viện Đa khoa Trung ương',
      description: 'Kết quả xét nghiệm định kỳ hàng quý',
      tags: ['Định kỳ', 'Xét nghiệm'],
      iconType: 'file',
    },
    {
      id: 2,
      title: 'Đơn thuốc điều trị',
      type: 'Đơn thuốc',
      date: '20/10/2024',
      doctor: 'BS. Trần Thị B',
      facility: 'Phòng khám Tim mạch',
      description: 'Đơn thuốc điều trị huyết áp cao',
      tags: ['Huyết áp', 'Điều trị'],
      iconType: 'prescription',
    },
    {
      id: 3,
      title: 'Chụp X-quang phổi',
      type: 'Hình ảnh y khoa',
      date: '5/9/2024',
      doctor: 'BS. Lê Văn C',
      facility: 'Bệnh viện Đa Khoa',
      description: 'Kiểm tra sức khỏe định kỳ',
      tags: ['Hình ảnh', 'Khám tổng quát'],
      iconType: 'prescription',
    },
  ];
  const handleView = (id) => {
    console.log('View record:', id);
  };

  const handleEdit = (id) => {
    console.log('Edit record:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete record:', id);
  };
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
                    title="Tổng hồ sơ"
                    value="3"
                    icon={FileText}
                    bgColor="rgba(135, 199, 236, 0.2)"
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <StatCard
                    title="Tháng này"
                    value="0"
                    icon={Calendar}
                    bgColor="rgba(81, 157, 177, 0.2)"
                  />
                </Grid>
                <Grid sx={{width: '400px'}} item xs={12} md={4} lg={6}>
                  <Card sx={{ height: '114px', borderRadius: '16px', border: '1px solid rgba(134, 203, 222, 0.3)' }}>
                    <CardContent sx={{ p: '25px', height: '100%' }}>
                      <Typography sx={{ fontSize: '14px', color: '#4a5565', mb: 1 }}>
                        Thao tác nhanh
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          startIcon={<Upload size={16} />}
                          sx={{
                            background: 'linear-gradient(to bottom, #519db1, #004aad)',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: '14px',
                            height: '36px',
                            flex: 1,
                          }}
                        >
                          Upload hồ sơ
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<GitCompare size={16} />}
                          sx={{
                            borderColor: '#519db1',
                            color: '#519db1',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: '14px',
                            height: '36px',
                            '&:hover': {
                              borderColor: '#519db1',
                              backgroundColor: 'rgba(81, 157, 177, 0.1)',
                            },
                          }}
                        >
                          So sánh
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
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
                  width: '90%'
                }}
            >
              <CardContent  sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center'}}>
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
                  </Box>
                </CardContent>
              </Card>                  
            {/* bản ghi */}
            {records.map((record) => (
                <HealthRecord
                  key={record.id}
                  record={record}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HealthRecordList