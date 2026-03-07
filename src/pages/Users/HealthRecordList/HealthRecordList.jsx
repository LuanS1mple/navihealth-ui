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
  Portal,
  Divider
} from '@mui/material';

import {
  FileText,
  Calendar,
  GitCompare,
  Search,
  Share2,
  FileKey,
  ShieldCheck,
  Download,
  Eye,
  Trash2
} from 'lucide-react';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import BackHandIcon from '@mui/icons-material/BackHand';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';
import { trackEvent, GA_EVENTS } from '../../../utils/analytics';

import requestApi from '../../../apis/apis'
import {
  UPLOAD_API,
  CREATE_VISIT,
  PREVIEW_AI,
  CONFIRM_SAVE,
  SAVE_RECORD,
  GET_RECORDS,
  DETAIL_RECORD,
  COMPARE_RECORDS,
  COMPARE_HISTORY,
  COMPARE_DETAIL,
  SHARE_RECORD,
  VIEW_SHARED_RECORD,
  MY_SHARE_CODES,
  REVOKE_SHARE_CODE,
  DOWNLOAD_SHARED_RECORD
} from '../../../constants/apis';

function HealthRecordList() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [confirmData, setConfirmData] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [showView, setShowView] = useState(false);

  // Share Record State
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareRecordId, setShareRecordId] = useState(null);
  const [shareExpires, setShareExpires] = useState(24);
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // View Shared Record State
  const [showViewByCodeModal, setShowViewByCodeModal] = useState(false);
  const [shareCodeInput, setShareCodeInput] = useState('');
  const [isFetchingShared, setIsFetchingShared] = useState(false);

  // Manage Codes State
  const [showManageCodesModal, setShowManageCodesModal] = useState(false);
  const [myShareCodes, setMyShareCodes] = useState([]);
  const [isFetchingCodes, setIsFetchingCodes] = useState(false);

  // Comparison State
  const [isComparisonMode, setIsComparisonMode] = useState(false);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [comparisonResult, setComparisonResult] = useState(null);
  const [isComparing, setIsComparing] = useState(false);
  const [showComparisonResult, setShowComparisonResult] = useState(false);
  const [showComparisonHistory, setShowComparisonHistory] = useState(false);
  const [comparisonHistory, setComparisonHistory] = useState([]);
  const [isFetchingHistory, setIsFetchingHistory] = useState(false);

  // Create Visit State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newVisitData, setNewVisitData] = useState({ recordName: '', hospitalName: '' });
  const [isCreatingVisit, setIsCreatingVisit] = useState(false);

  const [currentVisitId, setCurrentVisitId] = useState(null);

  // Camera State
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

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

  const processImage = async (files, visitId) => {
    setUploading(true);
    try {
      const formData = new FormData();
      // Gửi nhiều file lên cùng lúc
      Array.from(files).forEach(file => {
        formData.append("files", file);
      });

      const response = await requestApi(`${PREVIEW_AI}${visitId}/preview-ai`, "POST", formData);
      setConfirmData(response.data);
      setCurrentVisitId(visitId);
      setShowConfirm(true);
    } catch (e) {
      console.error(e);
      alert("Lỗi khi tải ảnh hoặc phân tích dữ liệu");
    } finally {
      setUploading(false);
    }
  };

  const handleCreateVisit = async () => {
    if (!newVisitData.recordName.trim()) {
      alert("Vui lòng nhập tên bộ hồ sơ");
      return;
    }
    setIsCreatingVisit(true);
    try {
      const response = await requestApi(CREATE_VISIT, 'POST', newVisitData);
      if (response.status === 200) {
        alert("Tạo bộ hồ sơ rỗng thành công. Bây giờ bạn có thể thêm ảnh vào bộ này.");
        setShowCreateModal(false);
        setNewVisitData({ recordName: '', hospitalName: '' });
        fetchRecords();
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Lỗi khi tạo bộ hồ sơ");
    } finally {
      setIsCreatingVisit(false);
    }
  };

  const handleAddRecords = async (visitId) => {
    try {
      const uploadedFiles = await getImages();
      if (!uploadedFiles || uploadedFiles.length === 0) return;
      await processImage(uploadedFiles, visitId);
    } catch (e) {
      if (e !== "Không có file") console.error(e);
    }
  };

  const handleAddRecordsCamera = (visitId) => {
    setCurrentVisitId(visitId);
    startCamera();
  };

  const handleUpload = async () => {
    try {
      const uploadedFiles = await getImages();
      if (!uploadedFiles || uploadedFiles.length === 0) return;

      setUploading(true);
      const visitName = `Khám bênh - ${new Date().toLocaleDateString('vi-VN')}`;
      const response = await requestApi(CREATE_VISIT, 'POST', {
        recordName: visitName,
        hospitalName: "Đang cập nhật..."
      });
      const visitId = response.data.visit_id;
      await processImage(uploadedFiles, visitId);
    } catch (e) {
      if (e !== "Không có file") {
        console.error(e);
        alert(e.response?.data?.message || "Lỗi khi xử lý hồ sơ");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleConfirmSave = async () => {
    try {
      // Sử dụng API confirm-save mới của Backend
      await requestApi(`${CONFIRM_SAVE}${currentVisitId}/confirm-save`, "POST", confirmData);
      trackEvent(GA_EVENTS.UPLOAD_RECORD);
      setShowConfirm(false);
      setConfirmData(null);
      setCurrentVisitId(null);
      alert("Lưu hồ sơ thành công");
      fetchRecords();
    } catch (e) {
      console.error(e);
      alert("Lỗi khi lưu hồ sơ");
    }
  };

  const getImages = () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.multiple = true; // Cho phép chọn nhiều ảnh
      input.onchange = () => {
        const files = input.files;
        if (!files || files.length === 0) return reject("Không có file");
        resolve(files);
      };
      input.click();
    });
  };

  // Camera Logic
  const startCamera = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // Prefer back camera on mobile
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Không thể truy cập camera. Vui lòng kiểm tra quyền truy cập.");
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setShowCamera(false);
  };

  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match video stream
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to Blob
    canvas.toBlob(async (blob) => {
      if (blob) {
        const file = new File([blob], `capture_${Date.now()}.jpg`, { type: 'image/jpeg' });
        stopCamera();

        // Nếu đã có visitId từ trước (thêm vào bộ hồ sơ con)
        if (currentVisitId) {
          await processImage([file], currentVisitId);
        } else {
          // Luồng tạo nhanh
          setUploading(true);
          try {
            const visitName = `Khám nhanh - ${new Date().toLocaleTimeString('vi-VN')}`;
            const response = await requestApi(CREATE_VISIT, 'POST', {
              recordName: visitName,
              hospitalName: "Khám trực tiếp"
            });
            await processImage([file], response.data.visit_id);
          } catch (error) {
            alert("Lỗi khi khởi tạo bộ hồ sơ");
          } finally {
            setUploading(false);
          }
        }
      }
    }, 'image/jpeg', 0.9);
  };

  const handleSelectRecord = (id) => {
    if (selectedRecords.includes(id)) {
      setSelectedRecords(selectedRecords.filter(item => item !== id));
    } else {
      if (selectedRecords.length < 2) {
        setSelectedRecords([...selectedRecords, id]);
      } else {
        alert("Bạn chỉ có thể chọn tối đa 2 hồ sơ để so sánh");
      }
    }
  };

  const handleCompare = async () => {
    if (selectedRecords.length !== 2) {
      alert("Vui lòng chọn đúng 2 hồ sơ để so sánh");
      return;
    }

    setIsComparing(true);
    try {
      const response = await requestApi(COMPARE_RECORDS, 'POST', {
        recordId1: selectedRecords[0],
        recordId2: selectedRecords[1]
      });

      if (response.status === 200) {
        const r1 = records.find(r => (r.id || r._id) === selectedRecords[0]);
        const r2 = records.find(r => (r.id || r._id) === selectedRecords[1]);
        setComparingNames({
          r1: r1?.recordName || 'Hồ sơ 1',
          r2: r2?.recordName || 'Hồ sơ 2'
        });
        setComparisonResult(response.data);
        setShowComparisonResult(true);
      }
    } catch (error) {
      console.error("Error comparing records:", error);
      alert("Lỗi khi so sánh hồ sơ. Vui lòng thử lại sau.");
    } finally {
      setIsComparing(false);
    }
  };

  const cancelComparison = () => {
    setIsComparisonMode(false);
    setSelectedRecords([]);
    setComparisonResult(null);
  };

  const fetchComparisonHistory = async () => {
    setIsFetchingHistory(true);
    try {
      const response = await requestApi(COMPARE_HISTORY, 'GET');
      if (response.status === 200) {
        setComparisonHistory(response.data);
      }
    } catch (error) {
      console.error("Error fetching comparison history:", error);
    } finally {
      setIsFetchingHistory(false);
    }
  };

  const [comparingNames, setComparingNames] = useState({ r1: '', r2: '' });

  const handleViewComparisonDetail = async (id, r1Name, r2Name) => {
    try {
      const response = await requestApi(`${COMPARE_DETAIL}${id}`, 'GET');
      if (response.status === 200) {
        setComparisonResult(response.data);
        setComparingNames({ r1: r1Name, r2: r2Name });
        setShowComparisonHistory(false); // Đóng modal lịch sử
        setTimeout(() => {
          setShowComparisonResult(true);
        }, 100);
      }
    } catch (error) {
      alert("Không thể tải chi tiết bản so sánh");
    }
  };

  const handleDeleteComparison = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa lịch sử so sánh này?")) return;
    try {
      await requestApi(`${COMPARE_DETAIL}${id}`, 'DELETE');
      fetchComparisonHistory();
    } catch (error) {
      alert("Xóa thất bại");
    }
  };

  // Share Handlers
  const handleOpenShare = (id) => {
    setShareRecordId(id);
    setGeneratedCode(null);
    setShowShareModal(true);
  };

  const handleGenerateShareCode = async () => {
    setIsGenerating(true);
    try {
      const response = await requestApi(`${SHARE_RECORD}${shareRecordId}`, 'POST', {
        ExpiresInHours: shareExpires
      });
      if (response.status === 200) {
        setGeneratedCode(response.data.share_code);
      }
    } catch (error) {
      console.error("Error creating share code:", error);
      alert(error.response?.data?.error || "Lỗi khi tạo mã chia sẻ");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFetchSharedRecord = async () => {
    if (!shareCodeInput.trim()) return;
    setIsFetchingShared(true);
    try {
      const response = await requestApi(`${VIEW_SHARED_RECORD}${shareCodeInput}`, 'GET');
      if (response.status === 200) {
        setViewData(response.data);
        setShowView(true);
        setShowViewByCodeModal(false);
        setShareCodeInput('');
      }
    } catch (error) {
      console.error("Error viewing shared record:", error);
      alert(error.response?.data?.error || "Mã chia sẻ không hợp lệ hoặc đã hết hạn");
    } finally {
      setIsFetchingShared(false);
    }
  };

  const fetchMyShareCodes = async () => {
    setIsFetchingCodes(true);
    try {
      const response = await requestApi(MY_SHARE_CODES, 'GET');
      if (response.status === 200) {
        setMyShareCodes(response.data);
      }
    } catch (error) {
      console.error("Error fetching share codes:", error);
    } finally {
      setIsFetchingCodes(false);
    }
  };

  const handleRevokeShareCode = async (code) => {
    if (!window.confirm("Bạn có chắc chắn muốn thu hồi mã này?")) return;
    try {
      await requestApi(`${REVOKE_SHARE_CODE}${code}`, 'DELETE');
      fetchMyShareCodes();
    } catch (error) {
      console.error("Error revoking code:", error);
    }
  };

  const handleDownloadShared = async (code) => {
    try {
      const response = await requestApi(`${DOWNLOAD_SHARED_RECORD}${code}`, 'GET', null, 'blob');
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `SharedRecord_${code}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading shared file:', error);
      alert("Hồ sơ này không có PDF hoặc đã hết hạn");
    }
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
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title="Tổng hồ sơ"
            value={records.length}
            icon={FileText}
            bgColor="rgba(0, 74, 173, 0.05)"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Paper className="glass-card" sx={{ p: 2.5, height: '100%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Thao tác nhanh</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<FileKey size={18} />}
                  onClick={() => setShowCreateModal(true)}
                  sx={{
                    background: 'linear-gradient(135deg, #519db1 0%, #004aad 100%)',
                    boxShadow: '0 4px 15px rgba(0, 74, 173, 0.2)'
                  }}
                >
                  Tạo bộ hồ sơ mới
                </Button>
                <Button
                  variant={isComparisonMode ? "contained" : "text"}
                  color={isComparisonMode ? "secondary" : "inherit"}
                  startIcon={<GitCompare size={18} />}
                  sx={{ color: isComparisonMode ? 'white' : '#64748b' }}
                  onClick={() => {
                    if (isComparisonMode) {
                      cancelComparison();
                    } else {
                      setIsComparisonMode(true);
                    }
                  }}
                >
                  {isComparisonMode ? "Hủy so sánh" : "So sánh chỉ số"}
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  startIcon={<FileKey size={18} />}
                  onClick={() => setShowViewByCodeModal(true)}
                >
                  Xem bằng mã
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  startIcon={<ShieldCheck size={18} />}
                  onClick={() => {
                    fetchMyShareCodes();
                    setShowManageCodesModal(true);
                  }}
                >
                  Quản lý mã đã chia sẻ
                </Button>
                <Button
                  variant="text"
                  color="warning"
                  startIcon={<Calendar size={18} />}
                  onClick={() => {
                    fetchComparisonHistory();
                    setShowComparisonHistory(true);
                  }}
                >
                  Lịch sử so sánh
                </Button>
                {isComparisonMode && (
                  <>
                    <Typography variant="body2" sx={{ alignSelf: 'center', mx: 1, fontWeight: 600, color: '#519db1' }}>
                      Đã chọn: {selectedRecords.length}/2
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={selectedRecords.length !== 2 || isComparing}
                      onClick={handleCompare}
                      startIcon={isComparing ? <CircularProgress size={20} color="inherit" /> : <GitCompare size={18} />}
                    >
                      {isComparing ? "Đang phân tích..." : "Thực hiện so sánh"}
                    </Button>
                  </>
                )}
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
                onShare={handleOpenShare}
                onAddRecords={handleAddRecords}
                onAddCamera={handleAddRecordsCamera}
                selectable={isComparisonMode}
                selected={selectedRecords.includes(record.id || record._id)}
                onSelect={handleSelectRecord}
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
                  <ConfirmRecord data={confirmData} message="Xác nhận thông tin" />
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
                  <ConfirmRecord
                    data={viewData}
                    message="Chi tiết hồ sơ"
                    onAddRecords={handleAddRecords}
                    onAddCamera={handleAddRecordsCamera}
                  />
                </Box>
                <Box sx={{ p: 2, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="outlined" onClick={() => setShowView(false)}>Đóng</Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* ===== CAMERA MODAL ===== */}
      <Modal open={showCamera} onClose={stopCamera}>
        <Fade in={showCamera}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 600, bgcolor: '#000',
            borderRadius: '24px', boxShadow: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column'
          }}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, color: 'white' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Chụp ảnh hồ sơ</Typography>
              <IconButton onClick={stopCamera} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box sx={{ position: 'relative', width: '100%', pt: '75%', bgcolor: '#000' }}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>

            <canvas ref={canvasRef} style={{ display: 'none' }} />

            <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', gap: 3, bgcolor: '#1a1a1a' }}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                startIcon={<PhotoCameraIcon />}
                onClick={capturePhoto}
                sx={{
                  borderRadius: '100px', px: 5, py: 2,
                  boxShadow: '0 0 20px rgba(25, 118, 210, 0.5)'
                }}
              >
                Chụp ảnh
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* ===== COMPARISON RESULT MODAL ===== */}
      <Modal open={showComparisonResult} onClose={() => setShowComparisonResult(false)}>
        <Fade in={showComparisonResult}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 900, maxHeight: '85vh', bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column'
          }}>
            <Box sx={{ p: 3, borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#f8fafc' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a' }}>
                Kết quả so sánh hồ sơ bằng AI
              </Typography>
              <IconButton onClick={() => setShowComparisonResult(false)} size="small">
                <Typography variant="body1">×</Typography>
              </IconButton>
            </Box>

            <Box sx={{ overflowY: 'auto', p: 4, flex: 1 }}>
              {comparisonResult && (
                <Box>
                  {(comparingNames.r1 || comparingNames.r2) && (
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: '#004aad', textAlign: 'center' }}>
                      {comparingNames.r1} <span style={{ color: '#94a3b8', fontWeight: 400 }}>so với</span> {comparingNames.r2}
                    </Typography>
                  )}

                  {/* Hiển thị tóm tắt 2 bộ hồ sơ */}
                  {(comparisonResult.Record1 || comparisonResult.record1 || comparisonResult.Record2 || comparisonResult.record2) && (
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={6}>
                        <Paper variant="outlined" sx={{ p: 2, borderRadius: '16px', bgcolor: '#f8fafc' }}>
                          <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Hồ sơ gốc</Typography>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>
                            {(comparisonResult.Record1 || comparisonResult.record1)?.recordName || (comparisonResult.Record1 || comparisonResult.record1)?.RecordName || 'Hồ sơ 1'}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {(comparisonResult.Record1 || comparisonResult.record1)?.hospitalName || (comparisonResult.Record1 || comparisonResult.record1)?.HospitalName || 'Không rõ bệnh viện'}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper variant="outlined" sx={{ p: 2, borderRadius: '16px', bgcolor: '#f8fafc' }}>
                          <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Hồ sơ so sánh</Typography>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>
                            {(comparisonResult.Record2 || comparisonResult.record2)?.recordName || (comparisonResult.Record2 || comparisonResult.record2)?.RecordName || 'Hồ sơ 2'}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {(comparisonResult.Record2 || comparisonResult.record2)?.hospitalName || (comparisonResult.Record2 || comparisonResult.record2)?.HospitalName || 'Không rõ bệnh viện'}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  )}

                  <Typography variant="body1" sx={{
                    lineHeight: 1.8,
                    color: '#334155',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'inherit',
                    '& strong': { color: '#0f172a', fontWeight: 700 }
                  }}>
                    {comparisonResult.comparisonResult || comparisonResult.ComparisonResult}
                  </Typography>

                  <Box sx={{ mt: 4, p: 3, bgcolor: '#f0f9ff', borderRadius: '16px', border: '1px solid #e0f2fe' }}>
                    <Typography variant="subtitle2" sx={{ color: '#0369a1', fontWeight: 700, mb: 1 }}>
                      Lưu ý từ hệ thống
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#0c4a6e' }}>
                      Kết quả so sánh này được tạo ra bởi trí tuệ nhân tạo (AI) dựa trên dữ liệu bạn cung cấp.
                      Thông tin này chỉ mang tính chất tham khảo và không thay thế cho chẩn đoán của chuyên gia y tế.
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>

            <Box sx={{ p: 2, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', bgcolor: '#f8fafc' }}>
              <Button
                variant="contained"
                onClick={() => setShowComparisonResult(false)}
                sx={{ borderRadius: '12px', px: 4, py: 1, textTransform: 'none', fontWeight: 600 }}
              >
                Đã hiểu
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* ===== SHARE MODAL ===== */}
      <Modal open={showShareModal} onClose={() => setShowShareModal(false)}>
        <Fade in={showShareModal}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 450, bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, p: 4
          }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>Chia sẻ hồ sơ</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Mã chia sẻ này cho phép người khác xem tóm tắt và chi tiết hồ sơ mà không cần đăng nhập.
            </Typography>

            {!generatedCode ? (
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>Thời gian mã có hiệu lực:</Typography>
                <Grid container spacing={1} sx={{ mb: 4 }}>
                  {[1, 2, 24, 48, 168].map((h) => (
                    <Grid item xs={4} key={h}>
                      <Button
                        fullWidth
                        variant={shareExpires === h ? "contained" : "outlined"}
                        onClick={() => setShareExpires(h)}
                        sx={{ borderRadius: '10px', textTransform: 'none' }}
                      >
                        {h === 168 ? '1 tuần' : h >= 24 ? `${h / 24} ngày` : `${h} giờ`}
                      </Button>
                    </Grid>
                  ))}
                </Grid>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleGenerateShareCode}
                  disabled={isGenerating}
                  startIcon={isGenerating ? <CircularProgress size={20} color="inherit" /> : <Share2 size={20} />}
                  sx={{ py: 1.5, borderRadius: '12px' }}
                >
                  {isGenerating ? "Đang tạo mã..." : "Tạo mã chia sẻ"}
                </Button>
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{
                  bgcolor: '#f0f9ff',
                  p: 3,
                  borderRadius: '16px',
                  border: '2px dashed #0ea5e9',
                  mb: 3
                }}>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                    Mã chia sẻ của bạn
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#0369a1', mt: 1, letterSpacing: 4 }}>
                    {generatedCode}
                  </Typography>
                </Box>
                <Typography variant="body2" color="success.main" sx={{ mb: 3, fontWeight: 500 }}>
                  ✓ Đã tạo mã thành công. Hãy gửi mã này cho bác sĩ hoặc người thân.
                </Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => setShowShareModal(false)}
                  sx={{ borderRadius: '12px' }}
                >
                  Đóng
                </Button>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* ===== VIEW BY CODE MODAL ===== */}
      <Modal open={showViewByCodeModal} onClose={() => setShowViewByCodeModal(false)}>
        <Fade in={showViewByCodeModal}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 400, bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, p: 4
          }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Box sx={{ display: 'inline-flex', p: 2, bgcolor: 'rgba(81, 157, 177, 0.1)', borderRadius: '16px', mb: 2 }}>
                <FileKey size={32} color="#519db1" />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>Xem hồ sơ bằng mã</Typography>
              <Typography variant="body2" color="text.secondary">
                Nhập mã 8 ký tự được chia sẻ với bạn để xem nội dung hồ sơ.
              </Typography>
            </Box>

            <TextField
              fullWidth
              autoFocus
              placeholder="VÍ DỤ: ABC12345"
              value={shareCodeInput}
              onChange={(e) => setShareCodeInput(e.target.value.toUpperCase())}
              sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              inputProps={{ sx: { textAlign: 'center', fontWeight: 700, letterSpacing: 4, height: 30, fontSize: 20 } }}
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleFetchSharedRecord}
              disabled={isFetchingShared || shareCodeInput.length < 4}
              startIcon={isFetchingShared ? <CircularProgress size={20} color="inherit" /> : <Eye size={20} />}
              sx={{ py: 1.5, borderRadius: '12px' }}
            >
              Xem nội dung
            </Button>
          </Box>
        </Fade>
      </Modal>

      {/* ===== MANAGE CODES MODAL ===== */}
      <Modal open={showManageCodesModal} onClose={() => setShowManageCodesModal(false)}>
        <Fade in={showManageCodesModal}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 650, maxHeight: '80vh', bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, display: 'flex', flexDirection: 'column', overflow: 'hidden'
          }}>
            <Box sx={{ p: 3, borderBottom: '1px solid #f1f5f9', bgcolor: '#f8fafc' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Danh sách mã đã chia sẻ</Typography>
              <Typography variant="caption" color="text.secondary">Bạn có thể thu hồi quyền truy cập bằng cách xóa mã</Typography>
            </Box>

            <Box sx={{ p: 0, flex: 1, overflowY: 'auto' }}>
              {isFetchingCodes ? (
                <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress size={30} /></Box>
              ) : myShareCodes.length === 0 ? (
                <Box sx={{ p: 10, textAlign: 'center' }}>
                  <Typography color="text.secondary">Bạn chưa tạo mã chia sẻ nào.</Typography>
                </Box>
              ) : (
                <Stack spacing={0} divider={<Divider />}>
                  {myShareCodes.map((item) => (
                    <Box key={item.share_code} sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 800, color: '#004aad', fontSize: 18, letterSpacing: 1 }}>
                          {item.share_code}
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ mt: 0.5 }}>
                          <Typography variant="caption" color="text.secondary">
                            Tạo: {new Date(item.created_at).toLocaleDateString()}
                          </Typography>
                          <Typography variant="caption" color={item.is_expired ? "error" : "success.main"}>
                            {item.is_expired ? "Hết hạn" : `Hết hạn: ${new Date(item.expires_at).toLocaleString()}`}
                          </Typography>
                        </Stack>
                      </Box>
                      <Stack direction="row" spacing={1}>
                        <IconButton
                          size="small"
                          color="info"
                          title="Tải PDF"
                          onClick={() => handleDownloadShared(item.share_code)}
                        >
                          <Download size={18} />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          title="Thu hồi mã"
                          onClick={() => handleRevokeShareCode(item.share_code)}
                        >
                          <Trash2 size={18} />
                        </IconButton>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>

            <Box sx={{ p: 2, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', bgcolor: '#f8fafc' }}>
              <Button onClick={() => setShowManageCodesModal(false)}>Đóng</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* ===== CREATE VISIT MODAL ===== */}
      <Modal open={showCreateModal} onClose={() => setShowCreateModal(false)}>
        <Fade in={showCreateModal}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 500, bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, p: 4
          }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>Tạo bộ hồ sơ sức khỏe mới</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Khởi tạo một bộ hồ sơ trống để quản lý các tờ xét nghiệm sau này.
            </Typography>

            <Stack spacing={2.5}>
              <TextField
                fullWidth
                label="Tên bộ hồ sơ (Ví dụ: Khám tổng quát 2024)"
                value={newVisitData.recordName}
                onChange={(e) => setNewVisitData({ ...newVisitData, recordName: e.target.value })}
                placeholder="Nhập tên gợi nhớ cho đợt khám này"
              />
              <TextField
                fullWidth
                label="Tên bệnh viện / Phòng khám"
                value={newVisitData.hospitalName}
                onChange={(e) => setNewVisitData({ ...newVisitData, hospitalName: e.target.value })}
                placeholder="Ví dụ: Bệnh viện Bạch Mai"
              />

              <Box sx={{ pt: 2, display: 'flex', gap: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => setShowCreateModal(false)}
                  sx={{ borderRadius: '12px' }}
                >
                  Hủy
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleCreateVisit}
                  disabled={isCreatingVisit}
                  startIcon={isCreatingVisit ? <CircularProgress size={20} color="inherit" /> : null}
                  sx={{ borderRadius: '12px' }}
                >
                  {isCreatingVisit ? "Đang tạo..." : "Xác nhận tạo"}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Fade>
      </Modal>

      {/* ===== COMPARISON HISTORY MODAL ===== */}
      <Modal open={showComparisonHistory} onClose={() => setShowComparisonHistory(false)}>
        <Fade in={showComparisonHistory}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: 700, maxHeight: '85vh', bgcolor: 'white',
            borderRadius: '24px', boxShadow: 24, display: 'flex', flexDirection: 'column', overflow: 'hidden'
          }}>
            <Box sx={{ p: 3, borderBottom: '1px solid #f1f5f9', bgcolor: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Lịch sử so sánh hồ sơ</Typography>
                <Typography variant="caption" color="text.secondary">Danh sách các lần bạn đã sử dụng AI để so sánh chỉ số</Typography>
              </Box>
              <IconButton onClick={() => setShowComparisonHistory(false)} size="small">×</IconButton>
            </Box>

            <Box sx={{ p: 0, flex: 1, overflowY: 'auto' }}>
              {isFetchingHistory ? (
                <Box sx={{ p: 10, textAlign: 'center' }}><CircularProgress size={30} /></Box>
              ) : comparisonHistory.length === 0 ? (
                <Box sx={{ p: 10, textAlign: 'center' }}>
                  <Typography color="text.secondary">Bạn chưa thực hiện bản so sánh nào.</Typography>
                </Box>
              ) : (
                <Stack spacing={0} divider={<Divider />}>
                  {comparisonHistory.map((item) => (
                    <Box key={item.id} sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s', '&:hover': { bgcolor: '#f1f5f9' } }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, color: '#0f172a', mb: 0.5 }}>
                          {item.record_1_name} <span style={{ color: '#94a3b8', fontWeight: 400 }}>vs</span> {item.record_2_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
                          "{item.summary_preview}"
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#519db1', fontWeight: 600 }}>
                          Ngày so sánh: {new Date(item.compare_date).toLocaleString()}
                        </Typography>
                      </Box>
                      <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<Eye size={14} />}
                          onClick={() => handleViewComparisonDetail(item.id, item.record_1_name, item.record_2_name)}
                          sx={{ borderRadius: '8px', textTransform: 'none' }}
                        >
                          Xem
                        </Button>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteComparison(item.id)}
                        >
                          <Trash2 size={18} />
                        </IconButton>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>

            <Box sx={{ p: 2, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', bgcolor: '#f8fafc' }}>
              <Button onClick={() => setShowComparisonHistory(false)} sx={{ fontWeight: 600 }}>Đóng</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default HealthRecordList;
