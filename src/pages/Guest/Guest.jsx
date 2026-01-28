import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip
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
  FitnessCenter as FitnessIcon
} from '@mui/icons-material';

function Guest() {
  const navigate = useNavigate();

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
          background: 'linear-gradient(135deg, #1e73be 0%, #2196f3 50%, #4facfe 100%)',
          color: 'white',
          py: { xs: 10, md: 15 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              label="🎉 Chào mừng đến với NaviHealth"
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 600,
                mb: 3,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                fontSize: '1rem',
                py: 2.5,
                px: 1,
                fontFamily: '"Be Vietnam Pro", sans-serif'
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
                textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                fontFamily: '"Be Vietnam Pro", sans-serif'
              }}
            >
              Quản Lý Sức Khỏe
              <br />
              <span style={{ color: '#fee140' }}>Thông Minh & Hiện Đại</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 5,
                opacity: 0.95,
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontFamily: '"Be Vietnam Pro", sans-serif'
              }}
            >
              Nền tảng quản lý hồ sơ y tế với công nghệ AI tiên tiến.
              <br />
              Chăm sóc sức khỏe của bạn một cách toàn diện và chuyên nghiệp.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowIcon />}
                onClick={() => navigate('/register')}
                sx={{
                  bgcolor: 'white',
                  color: '#1e73be',
                  px: 5,
                  py: 2,
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
                Bắt Đầu Ngay
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LoginIcon />}
                onClick={() => navigate('/login')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 5,
                  py: 2,
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
                Đăng Nhập
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Features Section - Pure Flexbox */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
      <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 12 } }}>
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
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1a1a2e', color: 'white', py: 4, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            sx={{
              opacity: 0.7,
              mb: 1,
              fontFamily: '"Be Vietnam Pro", sans-serif'
            }}
          >
            © 2026 NaviHealth. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.5,
              fontFamily: '"Be Vietnam Pro", sans-serif'
            }}
          >
            Made with ❤️ for your health
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Guest;