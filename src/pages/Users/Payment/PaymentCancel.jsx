import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Stack,
  IconButton
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 8 },
          borderRadius: '32px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(239, 68, 68, 0.1)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Box sx={{
            display: 'inline-flex',
            p: 3,
            borderRadius: '50%',
            bgcolor: 'rgba(239, 68, 68, 0.05)',
            mb: 3
          }}>
            <ErrorOutlineIcon sx={{ fontSize: 80, color: '#ef4444' }} />
          </Box>
          <Typography variant="h3" fontWeight="800" sx={{ color: '#1e293b', mb: 2 }}>
            Giao Dịch Đã Hủy
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto', mb: 4 }}>
            Bạn đã chọn hủy quá trình thanh toán. Đừng lo lắng, chúng tôi vẫn ở đây nếu bạn thay đổi ý định.
          </Typography>
        </Box>

        <Box sx={{
          p: 3,
          borderRadius: '24px',
          bgcolor: '#f8fafc',
          border: '1px solid #e2e8f0',
          mb: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          textAlign: 'left'
        }}>
          <SentimentVeryDissatisfiedIcon sx={{ color: '#64748b', fontSize: 32 }} />
          <Box>
            <Typography variant="subtitle2" fontWeight="700" color="#334155">Bạn gặp khó khăn khi thanh toán?</Typography>
            <Typography variant="body2" color="text.secondary">Hãy đảm bảo thẻ của bạn còn hạn mức hoặc thử phương thức thanh toán khác.</Typography>
          </Box>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            startIcon={<ReplayIcon />}
            onClick={() => navigate('/services')}
            sx={{
              borderRadius: '16px',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              bgcolor: '#1e293b',
              '&:hover': { bgcolor: '#0f172a' },
              textTransform: 'none'
            }}
          >
            Thử lại lần nữa
          </Button>
          <Button
            variant="text"
            size="large"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/main')}
            sx={{
              borderRadius: '16px',
              px: 4,
              py: 2,
              color: '#64748b',
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Về trang chủ
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default PaymentCancel;
