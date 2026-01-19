import React, { useState } from 'react';
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment
} from '@mui/material';
import { LockReset, Send, CheckCircle, Mail, Visibility, VisibilityOff } from '@mui/icons-material';
import requestApi from '../../apis/apis';
import { RESET_PASSWORD } from '../../constants/apis';
import { useSearchParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get("email");
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('info');

  const handleResendOTP = async () => {
    setResendLoading(true);
    setMessage('');

    // Giả lập API call
    setTimeout(() => {
      setResendLoading(false);
      setMessage('Mã OTP đã được gửi lại thành công!');
      setMessageType('success');

      // Tự động ẩn thông báo sau 3 giây
      setTimeout(() => setMessage(''), 3000);
    }, 1500);
  };

  const handleVerifyOTP = async () => {
    if (!otpCode || otpCode.length !== 6) {
      setMessage('Vui lòng nhập mã OTP hợp lệ (6 ký tự)');
      setMessageType('error');
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setMessage('Mật khẩu mới phải có ít nhất 6 ký tự');
      setMessageType('error');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('Mật khẩu xác nhận không khớp');
      setMessageType('error');
      return;
    }

    setLoading(true);
    setMessage('');

    const body = {
      email,
      otp: otpCode,
      newPassword
    };

    try {
      const response = await requestApi(RESET_PASSWORD, 'POST', body);

      if (response.data === 'Password reset successful') {
        setMessage('Đặt lại mật khẩu thành công! Đang chuyển hướng...');
        setMessageType('success');

        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 2000);
      } else {
        setMessage(response.data || 'Đặt lại mật khẩu thất bại');
        setMessageType('error');
      }
    } catch (err) {
      setMessage(err?.response?.data || 'Có lỗi xảy ra, vui lòng thử lại');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Chỉ cho phép số
    if (value.length <= 6) {
      setOtpCode(value);
    }
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={0} sx={{ minHeight: '600px' }}>
          {/* Left Side - Illustration */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 6,
              borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
              color: 'white'
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4
              }}
            >
              <Mail sx={{ fontSize: 60 }} />
            </Box>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Xác Thực OTP
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', opacity: 0.9, maxWidth: 400 }}>
              Chúng tôi đã gửi mã xác thực đến email của bạn. Vui lòng kiểm tra hộp thư và nhập mã để tiếp tục.
            </Typography>
          </Grid>

          {/* Right Side - Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: 'white',
              borderRadius: { xs: '0 0 16px 16px', md: '0 16px 16px 0' }
            }}
          >
            <Box sx={{ px: 6, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {/* Header */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                  Nhập Mã OTP
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Mã gồm 6 chữ số đã được gửi đến email của bạn
                </Typography>
              </Box>

              {/* Alert Message */}
              {message && (
                <Alert severity={messageType} sx={{ mb: 3 }}>
                  {message}
                </Alert>
              )}

              {/* OTP Input */}
              <TextField
                fullWidth
                label="Mã OTP"
                variant="outlined"
                value={otpCode}
                onChange={handleOtpChange}
                placeholder="000000"
                inputProps={{
                  maxLength: 6,
                  style: {
                    textAlign: 'center',
                    fontSize: '32px',
                    letterSpacing: '12px',
                    fontWeight: 600
                  }
                }}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '80px'
                  }
                }}
                helperText={`${otpCode.length}/6 ký tự`}
              />

              {/* New Password Input */}
              <TextField
                fullWidth
                label="Mật khẩu mới"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nhập mật khẩu mới"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{ mb: 3 }}
                helperText="Mật khẩu phải có ít nhất 6 ký tự"
              />

              {/* Confirm Password Input */}
              <TextField
                fullWidth
                label="Xác nhận mật khẩu"
                variant="outlined"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Nhập lại mật khẩu mới"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{ mb: 4 }}
                error={confirmPassword && newPassword !== confirmPassword}
                helperText={confirmPassword && newPassword !== confirmPassword ? 'Mật khẩu không khớp' : ''}
              />

              {/* Buttons */}
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={resendLoading ? <CircularProgress size={20} /> : <Send />}
                  onClick={handleResendOTP}
                  disabled={resendLoading || loading}
                  sx={{
                    py: 1.8,
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 600
                  }}
                >
                  {resendLoading ? 'Đang gửi...' : 'Gửi Lại'}
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />}
                  onClick={handleVerifyOTP}
                  disabled={loading || resendLoading || otpCode.length !== 6 || !newPassword || !confirmPassword}
                  sx={{
                    py: 1.8,
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)'
                    }
                  }}
                >
                  {loading ? 'Đang xác nhận...' : 'Xác Nhận'}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}