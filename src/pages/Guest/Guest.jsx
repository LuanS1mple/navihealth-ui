import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  Link,
  IconButton,
  SvgIcon,
  Divider
} from '@mui/material';
import {
  HealthAndSafety as HealthIcon,
  Psychology as AIIcon,
  CameraAlt as CameraIcon,
  NotificationsActive as ReminderIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
  FitnessCenter as FitnessIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon
} from '@mui/icons-material';
import bgGuest from '../../assets/bg_guest.png';

const TikTokIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.03 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72v4.02c-1.32-.44-2.86-.12-3.91.82c-.68.56-1.08 1.39-1.1 2.26c-.04 1.39 1.1 2.67 2.48 2.71c1.06.1 2.1-.46 2.6-1.39c.09-.22.13-.45.14-.68c.02-3.29-.03-6.59-.01-9.89c-.01-.32-.01-.65-.01-.98Z" />
  </SvgIcon>
);

function Guest() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('accessToken');

  const features = [
    {
      icon: <CameraIcon sx={{ fontSize: { xs: 60, md: 100 } }} />,
      title: 'Lưu Trữ Hồ Sơ Y Tế Thông Minh',
      description: 'Chụp ảnh hồ sơ y tế và tự động chuyển đổi thành dữ liệu số hóa. Công nghệ OCR tiên tiến giúp trích xuất thông tin chính xác, lưu trữ an toàn và truy cập mọi lúc mọi nơi.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
      imagePosition: 'left'
    },
    {
      icon: <AIIcon sx={{ fontSize: { xs: 60, md: 100 } }} />,
      title: 'AI Tư Vấn Y Tế 24/7',
      description: 'Trợ lý AI thông minh được đào tạo bởi các chuyên gia y tế, sẵn sàng hỗ trợ bạn mọi lúc. Giải đáp thắc mắc về sức khỏe, đưa ra lời khuyên y tế phù hợp và hướng dẫn chăm sóc bản thân.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb',
      imagePosition: 'right'
    },
    {
      icon: <FitnessIcon sx={{ fontSize: { xs: 60, md: 100 } }} />,
      title: 'Chế Độ Cá Nhân Hóa',
      description: 'Dựa trên tình trạng sức khỏe, chỉ số sinh học và mục tiêu cá nhân, hệ thống đề xuất chế độ dinh dưỡng và luyện tập phù hợp. Theo dõi tiến độ và đạt mục tiêu một cách khoa học.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
      imagePosition: 'left'
    },
    {
      icon: <ReminderIcon sx={{ fontSize: { xs: 60, md: 100 } }} />,
      title: 'Nhắc Nhở Thông Minh',
      description: 'Lên lịch nhắc nhở uống thuốc, khám bệnh định kỳ, tập luyện và các hoạt động chăm sóc sức khỏe. Thông báo đúng lúc, không bao giờ quên. Tùy chỉnh linh hoạt theo nhu cầu của bạn.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a',
      imagePosition: 'right'
    }
  ];

  const benefits = [
    'Quản lý hồ sơ y tế tập trung',
    'Truy cập mọi lúc, mọi nơi',
    'Bảo mật thông tin tuyệt đối',
    'AI hỗ trợ 24/7',
    'Giao diện thân thiện, dễ sử dụng',
    'Hoàn toàn miễn phí'
  ];

  return (
    <Box
      sx={{
        bgcolor: '#f5f7fa',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: '"Be Vietnam Pro", sans-serif'
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: { xs: 'none', md: `url(${bgGuest})` },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          bgcolor: { xs: '#f0f7ff', md: 'transparent' },
          background: {
            xs: 'linear-gradient(135deg, #e3f2fd 0%, #f1f8ff 100%)',
            md: `url(${bgGuest}) center/cover no-repeat`
          },
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header inside Hero */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 3
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  bgcolor: '#1976d2',
                  borderRadius: 2,
                  p: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <HealthIcon sx={{ color: 'white', fontSize: 32 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#2c3e50',
                  fontSize: '1.5rem',
                  letterSpacing: '-0.5px'
                }}
              >
                NaviHealth
              </Typography>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Typography
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                  cursor: 'pointer',
                  '&:hover': { color: '#1976d2' }
                }}
              >
                Tính năng
              </Typography>
              <Typography
                onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                  cursor: 'pointer',
                  '&:hover': { color: '#1976d2' }
                }}
              >
                Cách dùng
              </Typography>
              <MenuIcon sx={{ color: '#2c3e50', cursor: 'pointer' }} />
            </Stack>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <MenuIcon sx={{ color: '#2c3e50' }} />
            </Box>
          </Box>
        </Container>

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '600px', py: { xs: 5, md: 0 } }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 4,
                fontSize: { xs: '2.2rem', md: '2.8rem' },
                lineHeight: 1.2,
                color: '#2c3e50',
                fontFamily: '"Be Vietnam Pro", sans-serif'
              }}
            >
              Đi khám nhưng không nhớ
              <br />
              đang uống thuốc gì —
              <br />
              rất nhiều gia đình gặp.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: '#546e7a',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.6,
                fontFamily: '"Be Vietnam Pro", sans-serif'
              }}
            >
              NaviHealth giúp bạn lưu hồ sơ khám bệnh, đơn thuốc và xét nghiệm của cả gia đình – để mỗi lần đi khám không còn lúng túng.
            </Typography>

            <Stack spacing={2} sx={{ mb: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckIcon sx={{ color: '#4caf50', fontSize: 28 }} />
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 500, color: '#2c3e50' }}>
                  Chuẩn bị hồ sơ tái khám &lt; 2 phút
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <CheckIcon sx={{ color: '#4caf50', fontSize: 28 }} />
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 500, color: '#2c3e50' }}>
                  Mỗi người một hồ sơ – không lẩn đơn thuốc
                </Typography>
              </Box>
            </Stack>

            <Box>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/register')}
                sx={{
                  bgcolor: '#1976d2',
                  color: 'white',
                  px: 4,
                  py: 1.8,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  textTransform: 'none',
                  mb: 3,
                  '&:hover': {
                    bgcolor: '#1565c0',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Dùng thử miễn phí - không cần thẻ
              </Button>

              <Typography
                sx={{
                  color: '#546e7a',
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              >
                Đã có tài khoản?{' '}
                <Box
                  component="span"
                  onClick={() => navigate('/login')}
                  sx={{
                    color: '#1976d2',
                    cursor: 'pointer',
                    fontWeight: 700,
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Đăng nhập
                </Box>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section - Pure Flexbox */}
      <Container id="features" maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#1e73be',
              fontSize: { xs: '2rem', md: '3rem' },
              fontFamily: '"Be Vietnam Pro", sans-serif'
            }}
          >
            Tính Năng Nổi Bật
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              fontFamily: '"Be Vietnam Pro", sans-serif'
            }}
          >
            Khám phá những tính năng mạnh mẽ giúp bạn quản lý sức khỏe hiệu quả
          </Typography>
        </Box>

        <Stack spacing={{ xs: 6, md: 10 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: feature.imagePosition === 'right' ? 'row-reverse' : 'row' },
                alignItems: 'center',
                gap: { xs: 4, md: 6 }
              }}
            >
              {/* Image/Icon Side */}
              <Box
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '100%', md: '45%' }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 280, md: 380 },
                    borderRadius: 4,
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: `0 20px 60px ${feature.color}40`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: `0 25px 70px ${feature.color}50`
                    }
                  }}
                >
                  {/* Animated Background Pattern */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '150%',
                      height: '150%',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                      animation: 'moveGrid 20s linear infinite',
                      '@keyframes moveGrid': {
                        '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                        '100%': { transform: 'translate(30px, 30px) rotate(360deg)' }
                      }
                    }}
                  />
                  {/* Icon */}
                  <Box
                    sx={{
                      color: 'white',
                      position: 'relative',
                      zIndex: 1,
                      animation: 'float 3s ease-in-out infinite',
                      animationDelay: `${index * 0.2}s`,
                      '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-20px)' }
                      }
                    }}
                  >
                    {feature.icon}
                  </Box>
                </Box>
              </Box>

              {/* Text Side */}
              <Box
                sx={{
                  flex: '1 1 auto',
                  width: { xs: '100%', md: '55%' }
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 6,
                    background: feature.gradient,
                    borderRadius: 3,
                    mb: 3
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2.5,
                    color: '#1e73be',
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.3,
                    fontFamily: '"Be Vietnam Pro", sans-serif'
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 3,
                    fontWeight: 400,
                    fontFamily: '"Be Vietnam Pro", sans-serif'
                  }}
                >
                  {feature.description}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    background: `${feature.color}15`,
                    border: `2px solid ${feature.color}30`
                  }}
                >
                  <CheckIcon sx={{ color: feature.color, fontSize: 22 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: feature.color,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      fontFamily: '"Be Vietnam Pro", sans-serif'
                    }}
                  >
                    Tính năng nổi bật #{index + 1}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* Why Choose Section */}
      <Box id="benefits" sx={{ bgcolor: 'white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 }
            }}
          >
            {/* Text Side */}
            <Box
              sx={{
                flex: '1 1 auto',
                width: { xs: '100%', md: '50%' }
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#1e73be',
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontFamily: '"Be Vietnam Pro", sans-serif'
                }}
              >
                Tại Sao Chọn NaviHealth?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 400,
                  fontFamily: '"Be Vietnam Pro", sans-serif'
                }}
              >
                NaviHealth là giải pháp toàn diện giúp bạn quản lý sức khỏe một cách thông minh,
                tiện lợi và hiệu quả. Với công nghệ AI tiên tiến, chúng tôi mang đến trải nghiệm
                chăm sóc sức khỏe tốt nhất cho bạn và gia đình.
              </Typography>
              <Stack spacing={2.5}>
                {benefits.map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        minWidth: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#4caf5015',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <CheckIcon sx={{ color: '#4caf50', fontSize: 24 }} />
                    </Box>
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      sx={{
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontFamily: '"Be Vietnam Pro", sans-serif'
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Image Side */}
            <Box
              sx={{
                flex: '0 0 auto',
                width: { xs: '100%', md: '45%' }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 320, md: 480 },
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    width: '150%',
                    height: '150%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    animation: 'moveGrid 20s linear infinite',
                    '@keyframes moveGrid': {
                      '0%': { transform: 'translate(0, 0)' },
                      '100%': { transform: 'translate(30px, 30px)' }
                    }
                  }}
                />
                <HealthIcon
                  sx={{
                    fontSize: { xs: 140, md: 200 },
                    color: 'white',
                    opacity: 0.3,
                    position: 'relative',
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)' },
                      '50%': { transform: 'scale(1.05)' }
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e73be 0%, #2196f3 100%)',
          color: 'white',
          py: { xs: 8, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
              fontFamily: '"Be Vietnam Pro", sans-serif'
            }}
          >
            Sẵn Sàng Bắt Đầu?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              opacity: 0.9,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              fontFamily: '"Be Vietnam Pro", sans-serif'
            }}
          >
            Tham gia cùng hàng nghìn người dùng đã tin tưởng NaviHealth
            <br />
            để quản lý sức khỏe của họ
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            {isLoggedIn ? (
              <Button
                variant="contained"
                size="large"
                startIcon={<DashboardIcon />}
                onClick={() => navigate('/health-records')}
                sx={{
                  bgcolor: 'white',
                  color: '#1e73be',
                  px: 8,
                  py: 2.5,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  borderRadius: 3,
                  textTransform: 'none',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  '&:hover': {
                    bgcolor: '#fee140',
                    color: '#1e73be',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.2)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Truy Cập Hồ Sơ Sức Khỏe
              </Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<RegisterIcon />}
                  onClick={() => navigate('/register')}
                  sx={{
                    bgcolor: 'white',
                    color: '#1e73be',
                    px: 6,
                    py: 2.5,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    borderRadius: 3,
                    textTransform: 'none',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    '&:hover': {
                      bgcolor: '#fee140',
                      color: '#1e73be',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Đăng Ký Miễn Phí
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LoginIcon />}
                  onClick={() => navigate('/login')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 6,
                    py: 2.5,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    textTransform: 'none',
                    borderWidth: 2,
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderColor: 'white',
                      borderWidth: 2,
                      transform: 'translateY(-3px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Đăng Nhập Ngay
                </Button>
              </>
            )}
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1a1a2e', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={4}
            sx={{ mb: 4 }}
          >
            {/* Logo & Slogan */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Box sx={{ bgcolor: '#1976d2', borderRadius: 1.5, p: 0.5, display: 'flex' }}>
                  <HealthIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
                  NaviHealth
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 300 }}>
                Sức khỏe trong tầm tay - Đồng hành cùng gia đình bạn trên hành trình chăm sóc sức khỏe chủ động.
              </Typography>
            </Box>

            {/* Contact Info */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                Liên hệ với chúng tôi
              </Typography>
              <Stack spacing={1.5} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <Link href="tel:0971687208" sx={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  <PhoneIcon fontSize="small" />
                  <Typography variant="body2">097 168 72 08</Typography>
                </Link>
                <Link href="mailto:navihealthsuckhoetrongtamtay@gmail.com" sx={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  <EmailIcon fontSize="small" />
                  <Typography variant="body2">navihealthsuckhoetrongtamtay@gmail.com</Typography>
                </Link>
              </Stack>
            </Box>

            {/* Social Links */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                Theo dõi chúng tôi
              </Typography>
              <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61587293396443"
                  target="_blank"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: '#1877f2', transform: 'translateY(-3px)' },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com/NaviHealth"
                  target="_blank"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: '#e4405f', transform: 'translateY(-3px)' },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://tiktok.com/@NaviHealth"
                  target="_blank"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: '#000000', transform: 'translateY(-3px)' },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <TikTokIcon />
                </IconButton>
              </Stack>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ opacity: 0.5, fontFamily: '"Be Vietnam Pro", sans-serif' }}>
              © 2026 NaviHealth. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5, display: 'flex', alignItems: 'center', gap: 0.5, fontFamily: '"Be Vietnam Pro", sans-serif' }}>
              Made with ❤️ for your health
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Guest;