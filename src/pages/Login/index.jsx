import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Fade,
} from "@mui/material";
import { useState } from "react";
import requestApi from "../../apis/apis";
import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await requestApi('auth/login', 'POST', {
        username: username,
        password: password
      });
      navigate('/health-records');
    } catch (err) {
      console.error(err);
      if (err.response?.data?.error === "Unauthorized") {
        setError("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng nhập lại.");
      } else {
        setError("Đăng nhập thất bại. Vui lòng thử lại sau.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: 'radial-gradient(at 0% 0%, rgba(81, 157, 177, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 74, 173, 0.1) 0px, transparent 50%)',
        bgcolor: '#f8fafc',
        p: 2,
      }}
    >
      <Fade in={true} timeout={800}>
        <Box sx={{ width: "100%", maxWidth: 420 }}>
          <Stack spacing={3}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/')}
              sx={{
                width: "fit-content",
                color: "#64748b",
                "&:hover": { color: "#004aad", bgcolor: 'transparent', textDecoration: 'underline' },
              }}
            >
              Quay lại trang chủ
            </Button>

            <Paper
              className="glass-panel"
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: '24px',
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 20px 40px rgba(0, 74, 173, 0.05)',
              }}
            >
              <Stack spacing={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #519db1 0%, #004aad 100%)',
                      mb: 2,
                      boxShadow: '0 8px 20px rgba(0, 74, 173, 0.2)'
                    }}
                  >
                    <Zap color="white" size={32} />
                  </Box>
                  <Typography variant="h4" className="gradient-text" sx={{ mb: 1 }}>
                    Chào mừng trở lại
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Đăng nhập để tiếp tục quản lý sức khỏe của bạn
                  </Typography>
                </Box>

                {error && (
                  <Typography color="error" variant="body2" align="center"
                    sx={{ bgcolor: 'rgba(239, 68, 68, 0.05)', p: 1.5, borderRadius: '12px' }}>
                    {error}
                  </Typography>
                )}

                <Stack spacing={2.5}>
                  <Box>
                    <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#475569' }}>USERNAME</Typography>
                    <TextField
                      fullWidth
                      placeholder="Nhập username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      sx={{ mt: 0.5 }}
                    />
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#475569' }}>MẬT KHẨU</Typography>
                    <TextField
                      fullWidth
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{ mt: 0.5 }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <FormControlLabel
                      control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} size="small" />}
                      label={<Typography variant="caption" sx={{ fontWeight: 500 }}>Ghi nhớ tôi</Typography>}
                    />
                    <Button variant="text" size="small" color="secondary" onClick={() => navigate('/email')}>
                      Quên mật khẩu?
                    </Button>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleLogin}
                    disabled={loading}
                    sx={{ py: 1.5, fontSize: '1rem' }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Đăng nhập"}
                  </Button>
                </Stack>

                <Divider>
                  <Typography variant="caption" color="text.disabled">HOẶC</Typography>
                </Divider>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Chưa có tài khoản?{" "}
                    <Button sx={{ fontWeight: 700, p: 0 }} onClick={() => navigate('/register')}>
                      Đăng ký ngay
                    </Button>
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </Fade>
    </Box>
  );
}
