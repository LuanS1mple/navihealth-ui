import React, { useState } from 'react';
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
  CircularProgress
} from '@mui/material';
import { Feedback as FeedbackIcon, Send } from '@mui/icons-material';
import requestApi from '../../../apis/apis';
import { FEEDBACK } from '../../../constants/apis';

function Feedback() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

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

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, px: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
        <FeedbackIcon sx={{ color: '#004aad', fontSize: 32 }} />
        <Typography variant="h5" sx={{ color: '#004aad', fontWeight: 600 }}>
          Gửi Phản Hồi
        </Typography>
      </Box>

      <Typography sx={{ color: '#64748b', mb: 4 }}>
        Ý kiến của bạn giúp chúng tôi cải thiện NaviHealth tốt hơn mỗi ngày.
        Hãy chia sẻ trải nghiệm của bạn với chúng tôi nhé!
      </Typography>

      <Card sx={{
        borderRadius: '20px',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
        overflow: 'visible'
      }}>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 600, mb: 2, color: '#1e293b' }}>
                Đánh giá của bạn về ứng dụng?
              </Typography>
              <Rating
                name="feedback-rating"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                size="large"
                sx={{
                  fontSize: '3rem',
                  color: '#fbbf24',
                  '& .MuiRating-iconEmpty': {
                    color: '#e2e8f0'
                  }
                }}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 1.5, color: '#1e293b' }}>
                Nội dung góp ý
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={5}
                placeholder="Hãy chia sẻ điều bạn hài lòng hoặc điều chúng tôi cần cải thiện..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f8fafc',
                    '&:hover fieldset': {
                      borderColor: '#004aad',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#004aad',
                    }
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
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 74, 173, 0.3)',
                '&:hover': {
                  backgroundColor: '#003d8f',
                  boxShadow: '0 10px 15px -3px rgba(0, 74, 173, 0.4)',
                }
              }}
            >
              {loading ? 'đang gửi...' : 'Gửi phản hồi'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%', borderRadius: '10px' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Feedback;
