import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DescriptionIcon from '@mui/icons-material/Description';
import LockIcon from "@mui/icons-material/Lock";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StarIcon from "@mui/icons-material/Star";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";

const featureData = [
  {
    id: 1,
    icon: <DescriptionIcon sx={{ fontSize: 48, color: "#004aad" }} />,
    title: "Quản lý hồ sơ sức khỏe",
    description:
      "Lưu trữ và quản lý toàn bộ hồ sơ bệnh án, kết quả xét nghiệm của bạn một cách an toàn",
    isLocked: false,
    isPopular: true,
    iconBgColor: "#004aad",
  },
  {
    id: 2,
    icon: <PsychologyIcon sx={{ fontSize: 24, color: "#697282" }} />,
    title: "Phân tích AI thông minh",
    description:
      "AI phân tích kết quả xét nghiệm và đưa ra khuyến nghị sức khỏe cá nhân hóa",
    isLocked: true,
    isPopular: true,
    iconBgColor: "#e5e7eb",
  },
  {
    id: 3,
    icon: <EventIcon sx={{ fontSize: 24, color: "#697282" }} />,
    title: "Lịch hẹn & Nhắc nhở",
    description:
      "Nhắc nhở uống thuốc, tái khám và các hoạt động chăm sóc sức khỏe định kỳ",
    isLocked: true,
    isPopular: false,
    iconBgColor: "#e5e7eb",
  },
  {
    id: 4,
    icon: <MonitorHeartIcon sx={{ fontSize: 24, color: "#697282" }} />,
    title: "Theo dõi chỉ số sức khỏe",
    description:
      "Theo dõi các chỉ số quan trọng như huyết áp, đường huyết, cân nặng theo thời gian",
    isLocked: true,
    isPopular: false,
    iconBgColor: "#e5e7eb",
  },
  {
    id: 5,
    icon: <BarChartIcon sx={{ fontSize: 24, color: "#697282" }} />,
    title: "Báo cáo & Thống kê",
    description:
      "Xem biểu đồ xu hướng sức khỏe và nhận báo cáo chi tiết về tình trạng của bạn",
    isLocked: true,
    isPopular: false,
    iconBgColor: "#e5e7eb",
  },
  {
    id: 6,
    icon: <SupportAgentIcon sx={{ fontSize: 24, color: "#697282" }} />,
    title: "Tư vấn sức khỏe",
    description:
      "Kết nối với chuyên gia y tế và nhận tư vấn trực tuyến mọi lúc mọi nơi",
    isLocked: true,
    isPopular: false,
    iconBgColor: "#e5e7eb",
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: feature.isLocked
          ? "rgba(249, 250, 251, 0.5)"
          : "white",
        borderRadius: "16px",
        border: "2px solid",
        borderColor: feature.isLocked
          ? "rgba(229, 231, 235, 1)"
          : "rgba(134, 203, 222, 0.3)",
        overflow: "hidden",
        height: "202px",
      }}
    >
      <Stack spacing="22px" sx={{ p: 3, width: 'calc(100vw / 5 - 6px)' }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "14px",
          }}
        >
          {feature.icon}
        </Box>

        <Typography
          sx={{

            fontWeight: 400,
            color: feature.isLocked ? "#697282" : "#004aad",
            fontSize: "16px",
            lineHeight: "16px",
          }}
        >
          {feature.title}
        </Typography>
      </Stack>

      <Typography
        sx={{
          position: "absolute",
          top: "136px",
          left: "26px",
          width: "90%",

          fontWeight: 400,
          color: feature.isLocked ? "#99a1ae" : "#495565",
          fontSize: "14px",
          lineHeight: "20px",
          overflowX: 'hidden'
        }}
      >
        {feature.description}
      </Typography>

      {feature.isPopular && (
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 8px",
            borderRadius: "8px",
            background:
              "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
          }}
        >
          <StarIcon sx={{ fontSize: 12, color: "white" }} />
          <Typography
            sx={{

              fontWeight: 400,
              color: "white",
              fontSize: "12px",
              lineHeight: "16px",
            }}
          >
            Phổ biến
          </Typography>
        </Box>
      )}

      {feature.isLocked && (
        <Box
          sx={{
            position: "absolute",
            top: "2px",
            left: "2px",
            width: "calc(100% - 4px)",
            height: "calc(100% - 4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            borderRadius: "16px",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background:
                  "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
                boxShadow:
                  "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <LockIcon sx={{ fontSize: 32, color: "white" }} />
            </Box>

            <Typography
              sx={{

                fontWeight: 700,
                color: "#004aad",
                fontSize: "16px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              Tính năng bị khóa
            </Typography>

            <Button
              sx={{
                padding: "8px 12px",
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",

                fontWeight: 400,
                color: "white",
                fontSize: "14px",
                lineHeight: "20px",
                textTransform: "none",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
                },
              }}
            >
              Đăng nhập để mở khóa
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export const FeatureGrid = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "white",
        py: "80px",
        px: { xs: 2, md: 4, lg: 8 },
      }}
    >
      <Stack spacing={8}>
        <Stack spacing={3} alignItems="center">
          <Chip
            icon={<StarIcon sx={{ fontSize: 12, color: "#004aad" }} />}
            label="Tính năng nổi bật"
            sx={{
              backgroundColor: "rgba(135, 199, 236, 0.2)",
              border: "1px solid rgba(81, 157, 177, 0.3)",
              borderRadius: "8px",

              fontWeight: 400,
              color: "#004aad",
              fontSize: "12px",
              lineHeight: "16px",
              height: "22px",
              "& .MuiChip-icon": {
                marginLeft: "9px",
              },
            }}
          />

          <Typography
            sx={{

              fontWeight: 400,
              color: "#495565",
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              maxWidth: "px",
            }}
          >
            Đăng nhập để mở khóa toàn bộ tính năng và trải nghiệm hệ thống quản
            lý sức khỏe thông minh
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {featureData.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.id}>
              <FeatureCard feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default FeatureGrid;
