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
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BackHandIcon from '@mui/icons-material/BackHand';
import requestApi from '../../../apis/apis'
import { Modal, Backdrop, Fade } from "@mui/material";
import { UPLOAD_API, SAVE_RECORD } from '../../../constants/apis';
import ConfirmRecord from './ConfirmRecord/ConfirmRecord';
import Footer from '../../../components/Footer/Footer';
function HealthRecordList() {
  // const test = requestApi('auth/login','POST',{
  //   username: 'user',
  //   password: '123456'
  // })
  const responseTemplate = {
    "_id": "generated_id",
    "user_id": "123",
    "record_type": "MultiPage_BloodTest",
    "record_details": {
      "patient_info": {
        "full_name": "NGUYỄN VĂN A",
        "age": 35,
        "gender": "Nam",
        "address": "Sơn Tây, Hà Nội",
        "health_insurance_number": "01 01 23456789",
        "hospital": "BV Đa khoa Tâm Anh",
        "date_of_report": "08/01/2026",
        "section": "Khoa nội tổng hợp"
      },
      "test_results": [
        {
          "test_name": "Urê",
          "normal_range": "2,5 - 7,5 mmol/L",
          "result": 5.2
        },
        {
          "test_name": "Glucose",
          "normal_range": "3,9 - 6,4 mmol/L",
          "result": 7.1,
          "note": "(H)"
        },
        {
          "test_name": "Creatinin",
          "normal_range": "Nam: 62 - 120 µmol/L",
          "result": 88
        },
        {
          "test_name": "Acid Uric",
          "normal_range": "Nam: 180 - 420 µmol/L",
          "result": 350
        },
        {
          "test_name": "Protein T.P",
          "normal_range": "65 - 82 g/L",
          "result": 72
        },
        {
          "test_name": "Albumin",
          "normal_range": "35 - 50 g/L",
          "result": 42
        },
        {
          "test_name": "Cholesterol",
          "normal_range": "3,9 - 5,2 mmol/L",
          "result": 5.8,
          "note": "(H)"
        },
        {
          "test_name": "HDL-cholesterol",
          "normal_range": "≥ 0,9 mmol/L",
          "result": 1.1
        },
        {
          "test_name": "LDL-cholesterol",
          "normal_range": "≤ 3,4 mmol/L",
          "result": 3.8,
          "note": "(H)"
        },
        {
          "test_name": "Na+",
          "normal_range": "135 - 145 mmol/L",
          "result": 140
        },
        {
          "test_name": "Cl-",
          "normal_range": "98 - 106 mmol/L",
          "result": 102
        },
        {
          "test_name": "pH động mạch",
          "normal_range": "7,37 - 7,45",
          "result": 7.41
        },
        {
          "test_name": "pCO2",
          "normal_range": "Nam: 35 - 46 mmHg",
          "result": 40
        },
        {
          "test_name": "pO2 động mạch",
          "normal_range": "71 - 104 mmHg",
          "result": 95
        },
        {
          "test_name": "HCO3 chuẩn",
          "normal_range": "21 - 26 mmol/L",
          "result": 24
        }
      ]
    },
    "ai_summary": "Bệnh nhân có chỉ số Glucose và mỡ máu (Cholesterol, Triglycerid, LDL) hởi cao so với ngưỡng bình thường. Cần điều chỉnh chế độ ăn uống, giảm tinh bột và chất béo bảo hòa. Các chỉ số chức năng gan, thận và khí máu trong giới hạn bình thường.",
    "created_at": "2026-01-13T08:09:45.5322034+07:00",
    "url": "123"
  }
  // const test = requestApi('auth/logout', 'POST')
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
  const [confirmData, setConfirmData] = React.useState(null);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const handleUpload = async () => {
    try {
      const uploadedImage = await getImage();

      // upload file -> OCR -> AI
      const formData = new FormData();
      formData.append("files", uploadedImage);
      const data  = await requestApi(UPLOAD_API, "POST", formData, "multipart/form-data");
      // const data = responseTemplate; // mock tạm

      confirmAndSave(data);
    } catch (e) {
      console.error(e);
    }
  }
  const confirmAndSave = (data) => {
    setConfirmData(data);
    setShowConfirm(true);
  }
  const handleConfirmSave = async () => {
    try {
      await requestApi(SAVE_RECORD, "POST", confirmData.data);
      setShowConfirm(false);
      setConfirmData(null);
      alert("Lưu hồ sơ thành công");
    } catch (e) {
      console.error(e);
    }
  };
  const handleEditConfirm = () => {
    setShowConfirm(false);
  };
  const getImage = () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*"; // chỉ cho ảnh

      input.onchange = () => {
        const file = input.files[0];

        if (!file) {
          reject("Không có file được chọn");
          return;
        }

        if (!file.type.startsWith("image/")) {
          reject("Chỉ được chọn file ảnh");
          return;
        }

        resolve(file); // ✅ TRẢ VỀ FILE Ở ĐÂY
      };

      input.click();
    });
  }
  const style = { display: 'flex', gap: 2 }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box>
          <TopHeader />
          <Box sx={{ mx: 4 }}>
            {/* tổng quan */}
            <Box sx={{ my: 2 }}>
              <Grid sx={style} spacing={2}>
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
                <Grid sx={{ width: '400px' }} item xs={12} md={4} lg={6}>
                  <Card sx={{ height: '114px', borderRadius: '16px', border: '1px solid rgba(134, 203, 222, 0.3)' }}>
                    <CardContent sx={{ p: '25px', height: '100%' }}>
                      <Typography sx={{ fontSize: '14px', color: '#4a5565', mb: 1 }}>
                        Thao tác nhanh
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          startIcon={<CameraAltIcon size={16} />}
                          sx={{
                            background: 'linear-gradient(to bottom, #519db1, #004aad)',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: '12px',
                            height: '36px',
                            flex: 1,
                          }}
                          onClick={handleUpload}
                        >
                          Tải ảnh
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<BackHandIcon size={16} />}
                          sx={{
                            background: 'linear-gradient(to bottom, #519db1, #004aad)',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: '12px',
                            height: '36px',
                            flex: 1,
                          }}
                        >
                          Nhập tay
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<GitCompare size={16} />}
                          sx={{
                            borderColor: '#519db1',
                            color: '#519db1',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: '12px',
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
          <Footer/>
        </Box>
      </Box>
      <Modal
        open={showConfirm}
        onClose={handleEditConfirm}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
            sx: {
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0,0,0,0.4)"
            }
          }
        }}
      >
        <Fade in={showConfirm}>
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              overflowY: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              py: 1,
              pl: 4
            }}
          >
            {confirmData && (
              <ConfirmRecord
                data={confirmData.data}
                onConfirm={handleConfirmSave}
                onEdit={handleEditConfirm}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default HealthRecordList