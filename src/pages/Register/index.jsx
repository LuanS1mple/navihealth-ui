import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Paper,
  Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import requestApi from "../../apis/apis";
import { UserPlus } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (id) => (event) => {
    setFormData({ ...formData, [id]: event.target.value });
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Email không đúng định dạng");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return false;
    }
    if (!agreedToTerms) {
      setError("Vui lòng đồng ý với điều khoản dịch vụ");
      return false;
    }
    setError("");
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      await requestApi("auth/register", "POST", {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Đăng ký thất bại, vui lòng thử lại");
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
        background: 'radial-gradient(at 100% 0%, rgba(81, 157, 177, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 74, 173, 0.1) 0px, transparent 50%)',
        bgcolor: '#f8fafc',
        py: 6,
        px: 2,
      }}
    >
      <Fade in={true} timeout={800}>
        <Box sx={{ width: "100%", maxWidth: 480 }}>
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
                      background: 'linear-gradient(135deg, #86cbde 0%, #519db1 100%)',
                      mb: 2,
                      boxShadow: '0 8px 20px rgba(81, 157, 177, 0.2)'
                    }}
                  >
                    <UserPlus color="white" size={32} />
                  </Box>
                  <Typography variant="h4" className="gradient-text" sx={{ mb: 1 }}>
                    Bắt đầu ngay
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tạo tài khoản để trải nghiệm trợ lý sức khỏe thông minh
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
                    <TextField fullWidth placeholder="Nhập username" value={formData.username} onChange={handleInputChange("username")} sx={{ mt: 0.5 }} />
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#475569' }}>EMAIL</Typography>
                    <TextField fullWidth placeholder="email@example.com" value={formData.email} onChange={handleInputChange("email")} sx={{ mt: 0.5 }} />
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#475569' }}>MẬT KHẨU</Typography>
                    <TextField fullWidth type="password" placeholder="••••••••" value={formData.password} onChange={handleInputChange("password")} sx={{ mt: 0.5 }} />
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#475569' }}>XÁC NHẬN MẬT KHẨU</Typography>
                    <TextField fullWidth type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleInputChange("confirmPassword")} sx={{ mt: 0.5 }} />
                  </Box>

                  <FormControlLabel
                    control={<Checkbox checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} size="small" />}
                    label={
                      <Typography variant="caption" color="text.secondary">
                        Tôi đồng ý với Điều khoản và Chính sách bảo mật
                      </Typography>
                    }
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleRegister}
                    disabled={loading}
                    sx={{ py: 1.5, fontSize: '1rem' }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Đăng ký tài khoản"}
                  </Button>
                </Stack>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Đã có tài khoản?{" "}
                    <Button sx={{ fontWeight: 700, p: 0 }} onClick={() => navigate('/login')}>
                      Đăng nhập ngay
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
