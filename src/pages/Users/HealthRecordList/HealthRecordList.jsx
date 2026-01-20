import React, { useEffect, useState } from 'react'
import HealthRecord from '../../../components/HealthRecord/HealthRecord';
// Removed SideBar, TopHeader, Footer as they are in MainLayout
import StatCard from './StatCard/StatCard';
import ConfirmRecord from './ConfirmRecord/ConfirmRecord';

import {
  Box,
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
  Modal,
  Backdrop,
  Fade,
  CircularProgress
} from '@mui/material';

import {
  FileText,
  Calendar,
  Upload,
  GitCompare,
  Search,
} from 'lucide-react';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BackHandIcon from '@mui/icons-material/BackHand';


import requestApi from '../../../apis/apis'
import { UPLOAD_API, SAVE_RECORD, GET_RECORDS, DETAIL_RECORD } from '../../../constants/apis';

function HealthRecordList() {

  /* =======================
     STATE
  ======================= */
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [confirmData, setConfirmData] = useState(null);

  const [showConfirm, setShowConfirm] = useState(false);

  // View Modal State
  const [viewData, setViewData] = useState(null);
  const [showView, setShowView] = useState(false);

  /* =======================
     FETCH RECORDS (FIXED)
  ======================= */
  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      try {
        const response = await requestApi(GET_RECORDS, 'GET');
        if (response.status === 200) {
          setRecords(response.data);
        } else {
          setRecords([]);
        }
      } catch (err) {
        console.error(err);
        setRecords([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const response = await requestApi(GET_RECORDS, 'GET');
      if (response.status === 200) {
        setRecords(response.data);
      } else {
        setRecords([]);
      }
    } catch (err) {
      console.error(err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  /* =======================
     HANDLERS
  ======================= */
  const handleView = async (id) => {
    setUploading(true); // Re-use uploading loading state or create new one
    try {
      const response = await requestApi(`${DETAIL_RECORD}${id}`, 'GET');
      setViewData(response.data); // Assuming response.data is the JSON record
      setShowView(true);
    } catch (error) {
      console.error("Error viewing record:", error);
      alert("Không thể tải chi tiết hồ sơ");
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit record:', id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa hồ sơ này không?")) return;

    setUploading(true);
    try {
      await requestApi(`${DETAIL_RECORD}${id}`, 'DELETE');
      alert("Đã xóa hồ sơ thành công");
      fetchRecords(); // Refresh list
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("Xóa hồ sơ thất bại");
    } finally {
      setUploading(false);
    }
  };

  const handleUpload = async () => {
    try {
      const uploadedImage = await getImage();
      if (!uploadedImage) return;

      setUploading(true);
      const formData = new FormData();
      formData.append("files", uploadedImage);

      const data = await requestApi(
        UPLOAD_API,
        "POST",
        formData,
        "multipart/form-data"
      );

      setConfirmData(data);
      setShowConfirm(true);
    } catch (e) {
      console.error(e);
      alert("Lỗi khi tải ảnh hoặc phân tích dữ liệu");
    } finally {
      setUploading(false);
    }
  };

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

  const handleCloseView = () => {
    setShowView(false);
    setViewData(null);
  };

  /* =======================
     PICK IMAGE
  ======================= */
  const getImage = () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = () => {
        const file = input.files[0];
        if (!file) return reject("Không có file");
        if (!file.type.startsWith("image/")) return reject("Không phải ảnh");
        resolve(file);
      };

      input.click();
    });
  };

  /* =======================
     RENDER
  ======================= */
  return (
    <>
      <Box>
        {/* ===== STATS ===== */}
        <Box sx={{ my: { xs: 1.5, sm: 2 } }}>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }} sx={{ px: { xs: 0, sm: 0 } }}>
            <Grid item xs={12} md={4} lg={3}>
              <StatCard
                title="Tổng hồ sơ"
                value={records.length}
                icon={FileText}
                bgColor="rgba(135, 199, 236, 0.15)"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: { xs: 'none', md: 'grid' } }}>
              <StatCard
                title="Tháng này"
                value="0"
                icon={Calendar}
                bgColor="rgba(81, 157, 177, 0.15)"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={6}>
              <Card
                sx={{
                  height: { xs: 'auto', md: '114px' },
                  borderRadius: { xs: '12px', md: '16px' },
                  background: (theme) => theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,247,250,0.95) 100%)',
                  border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'}`,
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0 4px 20px rgba(0,0,0,0.3)'
                    : '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 6px 30px rgba(0,0,0,0.4)'
                      : '0 6px 30px rgba(0,0,0,0.12)',
                  }
                }}
              >
                <CardContent sx={{ p: { xs: '14px', md: '20px' }, py: { xs: '12px', md: '20px' } }}>
                  <Typography sx={{ fontSize: { xs: '12px', sm: '13px', md: '14px' }, fontWeight: 700, mb: { xs: 0.75, md: 1.2 }, color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a' }}>
                    Thao tác nhanh
                  </Typography>

                  <Box sx={{ display: 'flex', gap: { xs: 0.6, sm: 0.8, md: 1 }, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      startIcon={<CameraAltIcon sx={{ fontSize: { xs: '16px', md: '18px' } }} />}
                      onClick={handleUpload}
                      size="small"
                      sx={{
                        fontSize: { xs: '11px', sm: '12px', md: '13px' },
                        padding: { xs: '6px 12px', sm: '8px 14px', md: '8px 16px' },
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #004aad 0%, #003a8c 100%)',
                        boxShadow: '0 4px 12px rgba(0, 74, 173, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(0, 74, 173, 0.4)',
                          transform: 'translateY(-2px)'
                        },
                        '& .MuiButton-startIcon': {
                          marginRight: { xs: '4px', md: '6px' },
                        }
                      }}
                    >
                      Tải ảnh
                    </Button>

                    <Button
                      variant="contained"
                      startIcon={<BackHandIcon sx={{ fontSize: { xs: '16px', md: '18px' } }} />}
                      size="small"
                      sx={{
                        fontSize: { xs: '11px', sm: '12px', md: '13px' },
                        padding: { xs: '6px 12px', sm: '8px 14px', md: '8px 16px' },
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #0288d1 0%, #0277bd 100%)',
                        boxShadow: '0 4px 12px rgba(2, 136, 209, 0.3)',
                        transition: 'all 0.3s ease',
                        display: { xs: 'none', sm: 'inline-flex' },
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(2, 136, 209, 0.4)',
                          transform: 'translateY(-2px)'
                        },
                        '& .MuiButton-startIcon': {
                          marginRight: { xs: '4px', md: '6px' },
                        }
                      }}
                    >
                      Nhập tay
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<GitCompare size={16} />}
                      size="small"
                      sx={{
                        fontSize: { xs: '11px', sm: '12px', md: '13px' },
                        padding: { xs: '6px 12px', sm: '8px 14px', md: '8px 16px' },
                        fontWeight: 600,
                        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0, 74, 173, 0.4)',
                        color: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#004aad',
                        transition: 'all 0.3s ease',
                        display: { xs: 'none', sm: 'inline-flex' },
                        '&:hover': {
                          borderColor: '#004aad',
                          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 74, 173, 0.1)' : 'rgba(0, 74, 173, 0.08)',
                          transform: 'translateY(-2px)'
                        },
                        '& .MuiButton-startIcon': {
                          marginRight: { xs: '4px', md: '6px' },
                        }
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

        {/* ===== SEARCH ===== */}
        <Card sx={{
          mb: { xs: 1.5, md: 2.5 },
          width: '100%',
          borderRadius: { xs: '12px', md: '14px' },
          background: (theme) => theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,251,252,1) 100%)',
          border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'}`,
          boxShadow: (theme) => theme.palette.mode === 'dark'
            ? '0 4px 20px rgba(0,0,0,0.3)'
            : '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease'
        }}>
          <CardContent sx={{ p: { xs: '12px', md: '16px' } }}>
            <TextField
              fullWidth
              placeholder="Tìm kiếm hồ sơ sức khỏe..."
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={18} color="#519db1" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  fontSize: { xs: '12px', sm: '13px', md: '14px' },
                  borderRadius: { xs: '8px', md: '10px' },
                  height: { xs: '38px', md: '42px' },
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                  transition: 'all 0.3s ease',
                  '& fieldset': {
                    borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#519db1 !important',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#004aad !important',
                    boxShadow: '0 0 0 3px rgba(0, 74, 173, 0.1)',
                  }
                },
              }}
            />
          </CardContent>
        </Card>

        {/* ===== RECORD LIST ===== */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
            <Typography sx={{ fontSize: { xs: '13px', md: '14px' }, color: 'text.secondary' }}>
              ⏳ Đang tải hồ sơ của bạn...
            </Typography>
          </Box>
        )}

        {!loading && records.map((record) => (
          <HealthRecord
            key={record.id || record._id}
            record={record}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </Box>

      {/* ===== LOADING BACKDROP ===== */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, flexDirection: 'column', gap: 2 }}
        open={uploading}
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6" component="div">
          Đang xử lý dữ liệu...
        </Typography>
      </Backdrop>

      {/* ===== CONFIRM MODAL ===== */}
      <Modal
        open={showConfirm}
        onClose={handleEditConfirm}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Fade in={showConfirm}>
          <Box
            sx={{
              width: { xs: '95%', sm: '90%', md: '80%' },
              maxWidth: 1000,
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {confirmData && (
              <>
                <Box sx={{ overflowY: 'auto', p: 0, flex: 1 }}>
                  <ConfirmRecord
                    data={confirmData.data}
                  />
                </Box>

                {/* Fixed Footer Actions */}
                <Box sx={{
                  p: 2,
                  borderTop: '1px solid #e5e7eb',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 2,
                  bgcolor: 'background.paper'
                }}>
                  <Button variant="outlined" onClick={handleEditConfirm}>
                    Quay lại
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#2563eb" }}
                    onClick={handleConfirmSave}
                  >
                    Xác nhận lưu hồ sơ
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* ===== VIEW MODAL ===== */}
      <Modal
        open={showView}
        onClose={handleCloseView}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Fade in={showView}>
          <Box
            sx={{
              width: { xs: '95%', sm: '90%', md: '80%' },
              maxWidth: 1000,
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {viewData && (
              <>
                <Box sx={{ overflowY: 'auto', p: 0, flex: 1 }}>
                  <ConfirmRecord
                    data={viewData}
                  />
                </Box>

                {/* Fixed Footer Actions for View */}
                <Box sx={{
                  p: 2,
                  borderTop: '1px solid #e5e7eb',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 2,
                  bgcolor: 'background.paper'
                }}>
                  <Button variant="outlined" onClick={handleCloseView}>
                    Đóng
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default HealthRecordList;
