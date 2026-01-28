import React, { useEffect, useState } from 'react'
import HealthRecord from '../../../components/HealthRecord/HealthRecord';
import StatCard from './StatCard/StatCard';
import ConfirmRecord from './ConfirmRecord/ConfirmRecord';

import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Grid,
  Modal,
  Backdrop,
  Fade,
  CircularProgress,
  Paper,
  Stack,
  Portal
} from '@mui/material';

import {
  FileText,
  Calendar,
  GitCompare,
  Search,
} from 'lucide-react';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BackHandIcon from '@mui/icons-material/BackHand';

import requestApi from '../../../apis/apis'
import { UPLOAD_API, SAVE_RECORD, GET_RECORDS, DETAIL_RECORD } from '../../../constants/apis';

function HealthRecordList() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [confirmData, setConfirmData] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [showView, setShowView] = useState(false);

  useEffect(() => {
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

  const handleView = async (id) => {
    setUploading(true);
    try {
      const response = await requestApi(`${DETAIL_RECORD}${id}`, 'GET');
      setViewData(response.data);
      setShowView(true);
    } catch (error) {
      console.error("Error viewing record:", error);
      alert("Không thể tải chi tiết hồ sơ");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa hồ sơ này không?")) return;
    setUploading(true);
    try {
      await requestApi(`${DETAIL_RECORD}${id}`, 'DELETE');
      alert("Đã xóa hồ sơ thành công");
      fetchRecords();
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
      const data = await requestApi(UPLOAD_API, "POST", formData, "multipart/form-data");
      setConfirmData(data);
      setShowConfirm(true);
    } catch (e) {
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
      fetchRecords();
    } catch (e) {
      console.error(e);
    }
  };

  const getImage = () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = () => {
        const file = input.files[0];
        if (!file) return reject("Không có file");
        resolve(file);
      };
      input.click();
    });
  };

  return (
    <Box className="page-transition">
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" className="gradient-text">Hồ sơ sức khỏe</Typography>
          <Typography variant="body2" color="text.secondary">Quản lý và theo dõi lịch sử khám chữa bệnh của bạn</Typography>
        </Box>
      </Box>

      {/* ===== STATS & QUICK ACTIONS ===== */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Tổng hồ sơ"
            value={records.length}
            icon={FileText}
            bgColor="rgba(0, 74, 173, 0.05)"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper className="glass-card" sx={{ p: 2.5, height: '100%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Thao tác nhanh</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<CameraAltIcon />}
                  onClick={handleUpload}
                >
                  Tải kết quả khám (OCR)
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<BackHandIcon />}
                  sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                >
                  Nhập thủ công
                </Button>
                <Button
                  variant="text"
                  startIcon={<GitCompare size={18} />}
                  sx={{ color: '#64748b' }}
                >
                  So sánh chỉ số
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* ===== SEARCH ===== */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Tìm kiếm hồ sơ theo tên bài khám, bệnh viện..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} color="#519db1" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            }
          }}
        />
      </Box>

      {/* ===== RECORD LIST ===== */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Stack spacing={2} sx={{ width: '100%' }}>
          {records.map((record) => (
            <Box key={record.id || record._id} sx={{ width: '100%' }}>
              <HealthRecord
                record={record}
                onView={handleView}
                onDelete={handleDelete}
              />
            </Box>
          ))}
          {records.length === 0 && (
            <Box sx={{ width: '100%', py: 10, textAlign: 'center' }}>
              <Typography color="text.secondary">Bạn chưa có hồ sơ sức khỏe nào.</Typography>
            </Box>
          )}
        </Stack>
      )}

      {/* ===== MODALS (Confirm & View) ===== */}
      <Portal>
        <Backdrop
          sx={{
            zIndex: 99999,
            color: '#fff',
            flexDirection: 'column',
            gap: 2,
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 4, 20, 0.8)'
          }}
          open={uploading}
        >
          <CircularProgress color="inherit" size={60} thickness={4} />
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>Đang trích xuất dữ liệu...</Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>Hệ thống đang đọc thông tin từ ảnh, vui lòng đợi</Typography>
        </Backdrop>
      </Portal>

      <Modal open={showConfirm} onClose={() => setShowConfirm(false)}>
        <Fade in={showConfirm}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 1000, maxHeight: '90vh', bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column'
          }}>
            {confirmData && (
              <>
                <Box sx={{ overflowY: 'auto', p: 3, flex: 1 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Xác nhận thông tin</Typography>
                  <ConfirmRecord data={confirmData.data} message="Xác nhận thông tin" />
                </Box>
                <Box sx={{ p: 2, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button variant="text" onClick={() => setShowConfirm(false)}>Hủy</Button>
                  <Button variant="contained" onClick={handleConfirmSave}>Lưu vào hồ sơ</Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>

      <Modal open={showView} onClose={() => setShowView(false)}>
        <Fade in={showView}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 1000, maxHeight: '90vh', bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column'
          }}>
            {viewData && (
              <>
                <Box sx={{ overflowY: 'auto', p: 3, flex: 1 }}>
                  <ConfirmRecord data={viewData} message="Chi tiết hồ sơ" />
                </Box>
                <Box sx={{ p: 2, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="outlined" onClick={() => setShowView(false)}>Đóng</Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default HealthRecordList;
