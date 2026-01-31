import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  Divider
} from '@mui/material';
import {
  CheckCircle,
  Star,
  Description,
  Psychology,
  NotificationsActive,
} from '@mui/icons-material';

const plans = [
  {
    title: 'FREE',
    duration: '1 tháng',
    price: '0đ',
    limits: {
      records: '3 hồ sơ',
      ai: '5 câu hỏi/ngày',
      reminders: '2 nhắc nhở'
    },
    description: 'Trải nghiệm thử các tính năng cơ bản',
    features: [
      'Tra cứu lịch sử khám',
      'Hỗ trợ cơ bản qua email'
    ],
    recommended: false,
    color: '#64748b',
    buttonVariant: 'outlined'
  },
  {
    title: 'Gói 1 tháng',
    duration: '1 tháng',
    price: '84.000đ',
    limits: {
      records: '4 hồ sơ',
      ai: '20 câu hỏi/ngày',
      reminders: '5 nhắc nhở'
    },
    description: 'Tiện lợi, phù hợp dùng ngắn hạn',
    features: [
      'Tải lên hình ảnh xét nghiệm',
      'Không quảng cáo',
      'Tư vấn AI cơ bản'
    ],
    recommended: false,
    color: '#519db1',
    buttonVariant: 'outlined'
  },
  {
    title: 'Gói 2 tháng',
    duration: '2 tháng',
    price: '149.000đ',
    limits: {
      records: '9 hồ sơ',
      ai: '50 câu hỏi/ngày',
      reminders: '10 nhắc nhở'
    },
    description: 'Tiết kiệm hơn, lưu trữ nhiều hơn',
    features: [
      'Phân tích chỉ số AI chi tiết',
      'Ưu tiên hỗ trợ kỹ thuật',
      'Xuất báo cáo PDF'
    ],
    recommended: true,
    color: '#004aad',
    buttonVariant: 'contained'
  },
  {
    title: 'Gói 3 tháng',
    duration: '3 tháng',
    price: '189.000đ',
    limits: {
      records: '15 hồ sơ',
      ai: '100 câu hỏi/ngày',
      reminders: '20 nhắc nhở'
    },
    description: 'Báo cáo định kỳ, nhiều ưu đãi',
    features: [
      'Báo cáo sức khỏe định kỳ',
      'Phân tích xu hướng bệnh lý',
      'Giảm 5% phí gia hạn'
    ],
    recommended: false,
    color: '#9810FA',
    buttonVariant: 'outlined'
  },
  {
    title: 'Gói 6 tháng',
    duration: '6 tháng',
    price: '299.000đ',
    limits: {
      records: '30 hồ sơ',
      ai: 'Không giới hạn',
      reminders: 'Không giới hạn'
    },
    description: 'Lưu trữ thoải mái, hỗ trợ 24/7',
    features: [
      'Trợ lý ảo AI chuyên sâu',
      'Hỗ trợ chuyên gia 24/7',
      'Kết nối bác sĩ nhanh chóng'
    ],
    recommended: false,
    color: '#F54900',
    buttonVariant: 'outlined'
  }
];

function ServicePlans() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 0, width: '100%' }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Chip
          label="Nâng cấp giới hạn"
          color="primary"
          size="small"
          sx={{ mb: 2, borderRadius: '8px', fontWeight: 600, bgcolor: 'rgba(0, 74, 173, 0.1)', color: '#004aad' }}
        />
        <Typography variant="h3" className="gradient-text" sx={{ fontWeight: 'bold', mb: 2 }}>
          Lựa chọn gói dịch vụ phù hợp
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Tăng giới hạn lưu trữ hồ sơ, số lượng câu hỏi AI và nhắc nhở thuốc.
          Hãy chọn gói phù hợp nhất với nhu cầu chăm sóc sức khỏe của bạn.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" sx={{ px: { xs: 2, md: 4 } }}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card
              className={plan.recommended ? "glass-card recommended" : "glass-card"}
              sx={{
                height: '100%',
                borderRadius: '24px',
                position: 'relative',
                transition: 'all 0.3s ease',
                border: plan.recommended ? '2px solid #004aad' : '1px solid rgba(255,255,255,0.6)',
                transform: plan.recommended ? 'scale(1.05)' : 'scale(1)',
                zIndex: plan.recommended ? 2 : 1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {plan.recommended && (
                <Chip
                  label="Khuyên dùng"
                  color="primary"
                  size="small"
                  icon={<Star sx={{ fontSize: '14px !important' }} />}
                  sx={{
                    position: 'absolute',
                    top: -12,
                    right: 24,
                    fontWeight: 700
                  }}
                />
              )}

              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle2" sx={{ color: plan.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
                  {plan.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                  <Typography variant="h4" fontWeight="800" sx={{ color: '#1e293b' }}>
                    {plan.price}
                  </Typography>
                  {plan.price !== '0đ' && <Typography variant="body2" color="text.secondary">/{plan.duration}</Typography>}
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontStyle: 'italic', minHeight: 40 }}>
                  "{plan.description}"
                </Typography>

                {/* Limits Section */}
                <Box sx={{
                  p: 2,
                  bgcolor: plan.recommended ? 'rgba(0, 74, 173, 0.04)' : 'rgba(241, 245, 249, 0.5)',
                  borderRadius: '16px',
                  mb: 3,
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                    <Description sx={{ fontSize: 20, color: plan.color }} />
                    <Typography variant="body2" fontWeight="600" color="text.primary">
                      {plan.limits.records}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1, borderStyle: 'dashed' }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                    <Psychology sx={{ fontSize: 20, color: plan.color }} />
                    <Typography variant="body2" fontWeight="600" color="text.primary">
                      {plan.limits.ai}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1, borderStyle: 'dashed' }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <NotificationsActive sx={{ fontSize: 20, color: plan.color }} />
                    <Typography variant="body2" fontWeight="600" color="text.primary">
                      {plan.limits.reminders}
                    </Typography>
                  </Box>
                </Box>

                {/* Features removed */}

                <Button
                  fullWidth
                  variant={plan.buttonVariant}
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: '12px',
                    fontWeight: 700,
                    textTransform: 'none',
                    py: 1.2,
                    mt: 'auto'
                  }}
                >
                  {plan.price === '0đ' ? 'Dùng thử ngay' : 'Đăng ký ngay'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServicePlans;
