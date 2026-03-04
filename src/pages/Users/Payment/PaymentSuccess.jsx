import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Stack,
  useTheme
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const theme = useTheme();

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
          border: '1px solid rgba(0, 74, 173, 0.1)',
          boxShadow: '0 20px 50px rgba(0, 74, 173, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Decorative Elements */}
        <Box sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(0, 74, 173, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 150,
          height: 150,
          background: 'radial-gradient(circle, rgba(81, 157, 177, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />

        <Box sx={{ mb: 4, position: 'relative' }}>
          <Box className="success-checkmark-container" sx={{
            display: 'inline-flex',
            p: 3,
            borderRadius: '50%',
            bgcolor: 'rgba(16, 185, 129, 0.1)',
            mb: 3
          }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: '#10b981' }} />
          </Box>
          <Typography variant="h3" fontWeight="800" className="gradient-text" gutterBottom>
            Thanh Toán Thành Công!
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto', mb: 4 }}>
            Cảm ơn bạn đã tin dùng NAVI Health. Tài khoản của bạn đã được nâng cấp lên hạng Premium.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Box sx={{
            p: 3,
            borderRadius: '24px',
            bgcolor: 'white',
            border: '1px solid #e2e8f0',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}>
            <RocketLaunchIcon sx={{ color: '#004aad' }} />
            <Typography variant="subtitle2" fontWeight="700">Tốc độ AI</Typography>
            <Typography variant="caption" color="text.secondary">Ưu tiên xử lý nhanh nhất</Typography>
          </Box>
          <Box sx={{
            p: 3,
            borderRadius: '24px',
            bgcolor: 'white',
            border: '1px solid #e2e8f0',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}>
            <WorkspacePremiumIcon sx={{ color: '#f59e0b' }} />
            <Typography variant="subtitle2" fontWeight="700">Tính năng VIP</Typography>
            <Typography variant="caption" color="text.secondary">Mở khóa toàn bộ giới hạn</Typography>
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/chatbot')}
            sx={{
              borderRadius: '16px',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              boxShadow: '0 10px 20px rgba(0, 74, 173, 0.2)',
              textTransform: 'none'
            }}
          >
            Bắt đầu trải nghiệm ngay
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/main')}
            sx={{
              borderRadius: '16px',
              px: 4,
              py: 2,
              borderWidth: '2px',
              '&:hover': { borderWidth: '2px' },
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

export default PaymentSuccess;
