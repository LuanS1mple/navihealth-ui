import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Paper, Alert, CircularProgress } from '@mui/material';
import { MailOutline, Send } from '@mui/icons-material';
import requestApi from '../../apis/apis';
import { SEND_EMAIL_RESET } from '../../constants/apis';

export default function EmailReset() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validate email
    if (!email) {
      setError('Vui lòng nhập địa chỉ email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Địa chỉ email không hợp lệ');
      return;
    }

    setLoading(true);

    // Mock API call - This would be replaced with actual backend call
    try {
      const body = { email}
      requestApi(SEND_EMAIL_RESET,'POST', body)
      // Simulate success
      window.location.href = 'http://localhost:5173/reset'
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 3,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <MailOutline sx={{ fontSize: 64, color: '#667eea', mb: 2 }} />
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              Xác thực Email
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Nhập địa chỉ email của bạn để nhận mã OTP
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                type="email"
                label="Địa chỉ Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                disabled={loading}
                error={!!error && !success}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                Mã OTP đã được gửi đến email của bạn. Vui lòng kiểm tra hộp thư!
              </Alert>
            )}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
              sx={{
                borderRadius: 2,
                padding: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5568d3 0%, #65408a 100%)',
                },
              }}
            >
              {loading ? 'Đang gửi...' : 'Gửi mã OTP'}
            </Button>
          </form>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Bạn sẽ nhận được email chứa mã OTP trong vài phút
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
