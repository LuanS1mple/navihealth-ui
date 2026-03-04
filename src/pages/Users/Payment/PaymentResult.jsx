import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  Container
} from '@mui/material';
import {
  CheckCircleOutline,
  ErrorOutline,
  ArrowBack
} from '@mui/icons-material';
import requestApi from '../../../apis/apis';
import { PAYOS_GET_TRANSACTION } from '../../../constants/apis';

const PaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null); // 'PAID', 'CANCELLED', 'PENDING'
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const orderCode = searchParams.get('orderCode');
    const statusParam = searchParams.get('status');

    if (orderCode) {
      fetchTransaction(orderCode);
    } else {
      setLoading(false);
      setStatus('ERROR');
    }
  }, [location]);

  const fetchTransaction = async (orderCode) => {
    try {
      const response = await requestApi(`${PAYOS_GET_TRANSACTION}${orderCode}`, 'GET');
      if (response.data.success) {
        setTransaction(response.data.data);
        setStatus(response.data.data.status);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Error fetching transaction:", error);
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <CircularProgress size={64} sx={{ mb: 4 }} />
          <Typography variant="h5">Đang kiểm tra giao dịch...</Typography>
        </Box>
      );
    }

    if (status === 'PAID') {
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <CheckCircleOutline sx={{ fontSize: 100, color: 'success.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'success.main' }}>
            Thanh toán thành công!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Chúc mừng bạn đã nâng cấp tài khoản thành công. Gói dịch vụ của bạn đã được kích hoạt.
          </Typography>

          <Paper sx={{ p: 3, mb: 4, bgcolor: 'rgba(0,0,0,0.02)', borderRadius: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography color="text.secondary">Mã đơn hàng:</Typography>
              <Typography fontWeight="bold">{transaction?.orderCode}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography color="text.secondary">Gói dịch vụ:</Typography>
              <Typography fontWeight="bold">{transaction?.planCode}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography color="text.secondary">Số tiền:</Typography>
              <Typography fontWeight="bold" color="primary">{transaction?.amount.toLocaleString()}đ</Typography>
            </Box>
          </Paper>

          <Button
            variant="contained"
            size="large"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/main')}
            sx={{ borderRadius: 3, px: 4 }}
          >
            Quay lại trang chủ
          </Button>
        </Box>
      );
    }

    if (status === 'CANCELLED') {
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <ErrorOutline sx={{ fontSize: 100, color: 'warning.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'warning.main' }}>
            Giao dịch đã hủy
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Bạn đã hủy yêu cầu thanh toán. Vui lòng thử lại nếu bạn vẫn muốn nâng cấp gói dịch vụ.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/services')}
            sx={{ borderRadius: 3, px: 4 }}
          >
            Thử lại
          </Button>
        </Box>
      );
    }

    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <ErrorOutline sx={{ fontSize: 100, color: 'error.main', mb: 2 }} />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'error.main' }}>
          Có lỗi xảy ra
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
          Chúng tôi không tìm thấy thông tin giao dịch hoặc đã có lỗi xảy ra trong quá trình xử lý.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/services')}
          sx={{ borderRadius: 3 }}
        >
          Quay lại trang dịch vụ
        </Button>
      </Box>
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 6,
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.04)'
        }}
      >
        {renderContent()}
      </Paper>
    </Container>
  );
};

export default PaymentResult;
