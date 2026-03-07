import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  IconButton,
  Divider,
  Stack
} from '@mui/material';
import { Feedback as FeedbackIcon, Send, Delete as DeleteIcon } from '@mui/icons-material';
import requestApi from '../../../apis/apis';
import { FEEDBACK, MY_FEEDBACKS } from '../../../constants/apis';

function Feedback() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [myFeedbacks, setMyFeedbacks] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const fetchMyFeedbacks = async () => {
    setFetching(true);
    try {
      const response = await requestApi(MY_FEEDBACKS, 'GET');
      if (response.status === 200) {
        setMyFeedbacks(response.data);
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMyFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setSnackbar({
        open: true,
        message: 'Vui lòng nhập nội dung phản hồi.',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);
    try {
      const response = await requestApi(FEEDBACK, 'POST', {
        rating,
        comment
      });

      if (response.status === 200) {
        setSnackbar({
          open: true,
          message: 'Cảm ơn bạn đã gửi phản hồi!',
          severity: 'success'
        });
        setComment('');
        setRating(5);
        fetchMyFeedbacks(); // Refresh list
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSnackbar({
        open: true,
        message: 'Có lỗi xảy ra khi gửi phản hồi. Vui lòng thử lại sau.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa phản hồi này?')) return;

    try {
      const response = await requestApi(`${FEEDBACK}/${id}`, 'DELETE');
      if (response.status === 200) {
        setSnackbar({
          open: true,
          message: 'Đã xóa phản hồi.',
          severity: 'success'
        });
        setMyFeedbacks(prev => prev.filter(f => (f.id || f._id) !== id));
      }
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4, px: 2, pb: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
        <FeedbackIcon sx={{ color: '#004aad', fontSize: 32 }} />
        <Typography variant="h5" sx={{ color: '#004aad', fontWeight: 600 }}>
          Ý Kiến Phản Hồi
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        {/* FORM GỬI FEEDBACK */}
        <Box>
          <Typography sx={{ color: '#64748b', mb: 3 }}>
            Hãy chia sẻ trải nghiệm của bạn để giúp NaviHealth hoàn thiện hơn mỗi ngày.
          </Typography>

          <Card sx={{
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}>
            <CardContent sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                    Đánh giá của bạn?
                  </Typography>
                  <Rating
                    value={rating}
                    onChange={(e, v) => setRating(v)}
                    size="large"
                    sx={{ color: '#fbbf24' }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}>
                    Nội dung góp ý
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Điều gì làm bạn hài lòng hoặc chưa hài lòng?"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: '#f8fafc',
                      }
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                  sx={{
                    py: 1.5,
                    borderRadius: '12px',
                    backgroundColor: '#004aad',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#003d8f' }
                  }}
                >
                  {loading ? 'đang gửi...' : 'Gửi phản hồi'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>

        {/* DANH SÁCH FEEDBACK ĐÃ GỬI */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155', mb: 3 }}>
            Phản hồi của tôi
          </Typography>

          {fetching ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress size={30} sx={{ color: '#004aad' }} />
            </Box>
          ) : myFeedbacks.length === 0 ? (
            <Box sx={{
              p: 4, textAlign: 'center', backgroundColor: '#f8fafc',
              borderRadius: '16px', border: '1px dashed #cbd5e1'
            }}>
              <Typography sx={{ color: '#94a3b8' }}>Bạn chưa gửi phản hồi nào.</Typography>
            </Box>
          ) : (
            <Stack spacing={2}>
              {myFeedbacks.map((fb) => {
                const id = fb.id || fb._id;
                const ratingValue = fb.rating || fb.Rating || 0;
                const commentText = fb.comment || fb.Comment || "";
                const dateStr = fb.createdAt || fb.CreatedAt;

                return (
                  <Card key={id} sx={{ borderRadius: '16px', border: '1px solid #f1f5f9', position: 'relative' }}>
                    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Rating value={ratingValue} readOnly size="small" sx={{ color: '#fbbf24' }} />
                        <IconButton
                          size="small"
                          onClick={() => handleDelete(id)}
                          sx={{ color: '#ef4444', p: 0.5 }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography variant="body2" sx={{ mt: 1, color: '#334155', whiteSpace: 'pre-line' }}>
                        {commentText}
                      </Typography>
                      {dateStr && (
                        <Typography variant="caption" sx={{ mt: 1.5, display: 'block', color: '#94a3b8' }}>
                          {new Date(dateStr).toLocaleDateString('vi-VN')} {new Date(dateStr).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </Stack>
          )}
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ borderRadius: '10px' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Feedback;
