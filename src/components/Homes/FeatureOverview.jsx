import ArrowForward from "@mui/icons-material/ArrowForward";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const statsData = [
  {
    value: "10,000+",
    label: "Người dùng tin tưởng",
  },
  {
    value: "50,000+",
    label: "Hồ sơ đã quản lý",
  },
  {
    value: "98%",
    label: "Độ hài lòng",
  },
  {
    value: "24/7",
    label: "Hỗ trợ luôn sẵn sàng",
  },
];

export const FeatureOverview = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={6}
        sx={{
          width: "100%",
          alignItems: "center",
          mt: 2,
          px: { xs: 2, md: 4 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "11px",
            px: "9px",
            py: "5px",
            backgroundColor: "rgba(135, 199, 236, 0.2)",
            borderRadius: "8px",
            border: "1px solid rgba(81, 157, 177, 0.3)",
          }}
        >
          <HealthAndSafetyOutlinedIcon
            sx={{
              width: "12px",
              height: "12px",
              color: "#004aad",
            }}
          />
          <Typography
            sx={{

              fontWeight: 400,
              color: "#004aad",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0",
            }}
          >
            Nền tảng chăm sóc sức khỏe thông minh
          </Typography>
        </Box>

        <Stack spacing="3px" alignItems="center">
          <Typography
            sx={{

              fontWeight: 400,
              color: "#004aad",
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "0",
              textAlign: "center",
            }}
          >
            Quản lý sức khỏe
          </Typography>
          <Typography
            sx={{

              fontWeight: 400,
              color: "#519db1",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0",
              textAlign: "center",
            }}
          >
            Thông minh &amp; Hiện đại
          </Typography>
        </Stack>

        <Box sx={{ px: 6 }}>
          <Typography
            sx={{

              fontWeight: 400,
              color: "#495565",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0",
              textAlign: "center",
            }}
          >
            NAVI HEALTH giúp bạn quản lý hồ sơ sức khỏe, theo dõi chỉ số, và
            nhận tư vấn từ AI thông minh. Mọi thông tin sức khỏe của bạn đều
            được bảo mật và quản lý tập trung.
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="contained"
            sx={{
              width: "172.28px",
              height: "40px",
              borderRadius: "16px",
              background:
                "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
              textTransform: "none",
              px: 2,
              py: 1,
            }}
            endIcon={<ArrowForward sx={{ width: "16px", height: "16px" }} />}
          >
            <Typography
              sx={{

                fontWeight: 400,
                color: "white",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0",
              }}
            >
              Bắt đầu miễn phí
            </Typography>
          </Button>

          <Button
            variant="outlined"
            sx={{
              width: "135.88px",
              height: "40px",
              borderRadius: "16px",
              backgroundColor: "white",
              borderColor: "#519db1",
              textTransform: "none",
              px: 4,
              py: 1,
            }}
          >
            <Typography
              sx={{

                fontWeight: 400,
                color: "#519db1",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0",
              }}
            >
              Đăng nhập
            </Typography>
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {statsData.map((stat, index) => (
            <Grid item xs={3} key={index}>
              <Stack spacing={1} alignItems="center">
                <Typography
                  sx={{

                    fontWeight: 700,
                    color: "#004aad",
                    fontSize: "32px",
                    lineHeight: "48px",
                    letterSpacing: "0",
                    textAlign: "center",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{

                    fontWeight: 400,
                    color: "#495565",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0",
                    textAlign: "center",
                  }}
                >
                  {stat.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default FeatureOverview;
