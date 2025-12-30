import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Stack, Typography } from "@mui/material";

export const FeatureCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
        mt: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 0%)",
          opacity: 0.1,
        }}
      />

      <Stack
        spacing={4}
        sx={{
          position: "relative",
          py: 6,
          px: 6,
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm0 43.2c-10.598 0-19.2-8.602-19.2-19.2S21.402 12.8 32 12.8 51.2 21.402 51.2 32 42.598 51.2 32 51.2z' fill='white'/%3E%3Cpath d='M32 20.8c-1.325 0-2.4 1.075-2.4 2.4v8.8c0 1.325 1.075 2.4 2.4 2.4s2.4-1.075 2.4-2.4v-8.8c0-1.325-1.075-2.4-2.4-2.4zM32 38.4c-1.325 0-2.4 1.075-2.4 2.4s1.075 2.4 2.4 2.4 2.4-1.075 2.4-2.4-1.075-2.4-2.4-2.4z' fill='white'/%3E%3C/svg%3E"
          alt="Container"
          sx={{
            width: "64px",
            height: "64px",
          }}
        />

        <Stack spacing={0}>
          <Typography
            sx={{
              fontFamily: "'Arimo-Regular', Helvetica",
              fontWeight: 400,
              color: "white",
              fontSize: "16px",
              textAlign: "center",
              letterSpacing: "0",
              lineHeight: "24px",
            }}
          >
            Sẵn sàng bắt đầu hành trình
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Arimo-Regular', Helvetica",
              fontWeight: 400,
              color: "white",
              fontSize: "16px",
              textAlign: "center",
              letterSpacing: "0",
              lineHeight: "24px",
            }}
          >
            chăm sóc sức khỏe?
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontFamily: "'Arimo-Regular', Helvetica",
            fontWeight: 400,
            color: "rgba(255, 254, 254, 0.9)",
            fontSize: "16px",
            textAlign: "center",
            letterSpacing: "0",
            lineHeight: "24px",
            maxWidth: "655px",
          }}
        >
          Tạo tài khoản miễn phí ngay hôm nay và trải nghiệm hệ thống quản lý
          sức khỏe thông minh. Không cần thẻ tín dụng, bắt đầu trong vài giây.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "8px 16px",
              height: "40px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Arimo-Regular', Helvetica",
                fontWeight: 400,
                color: "#004aad",
                fontSize: "14px",
                letterSpacing: "0",
                lineHeight: "20px",
                textTransform: "none",
              }}
            >
              Đăng ký miễn phí
            </Typography>
            <ArrowForwardIcon
              sx={{
                width: "16px",
                height: "16px",
                ml: 1,
                color: "#004aad",
              }}
            />
          </Button>

          <Button
            variant="outlined"
            sx={{
              backgroundColor: "transparent",
              borderRadius: "16px",
              padding: "8px 32px",
              height: "40px",
              border: "2px solid white",
              "&:hover": {
                border: "2px solid white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Arimo-Regular', Helvetica",
                fontWeight: 400,
                color: "white",
                fontSize: "14px",
                letterSpacing: "0",
                lineHeight: "20px",
                textTransform: "none",
              }}
            >
              Xem gói dịch vụ
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeatureCard;
