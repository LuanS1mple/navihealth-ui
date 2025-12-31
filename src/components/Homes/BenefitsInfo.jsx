import ArrowForward from "@mui/icons-material/ArrowForward";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Security from "@mui/icons-material/Security";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";

const benefitsList = [
  "Miễn phí cho 2 hồ sơ sức khỏe đầu tiên",
  "Bảo mật dữ liệu cấp y tế",
  "Truy cập mọi lúc mọi nơi",
  "Giao diện thân thiện, dễ sử dụng",
];

export const BenefitsInfo = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(117deg, rgba(81, 157, 177, 0.05) 0%, rgba(135, 199, 236, 0.1) 100%)",
        py: 10,
        px: { xs: 4, md: "312.5px" },
        position: "relative",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
        sx={{ width: "100%" }}
      >
        <Stack spacing={4} sx={{ flex: 1, maxWidth: { md: "616px" } }}>
          <Chip
            icon={
              <Security
                sx={{
                  fontSize: "12px",
                  color: "#004aad",
                  width: "12px",
                  height: "12px",
                }}
              />
            }
            label="An toàn & Tin cậy"
            sx={{
              width: "fit-content",
              height: "22px",
              backgroundColor: "rgba(135, 199, 236, 0.2)",
              border: "1px solid rgba(81, 157, 177, 0.3)",
              borderRadius: "8px",
              "& .MuiChip-label": {
                fontFamily: "'Arimo-Regular', Helvetica",
                fontSize: "12px",
                lineHeight: "16px",
                color: "#004aad",
                padding: "0 8px 0 0",
              },
              "& .MuiChip-icon": {
                marginLeft: "9px",
                marginRight: "8px",
              },
            }}
          />

          <Stack spacing={0}>
            <Typography
              sx={{
                fontFamily: "'Arimo-Regular', Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#004aad",
                fontWeight: 400,
              }}
            >
              Tại sao chọn
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Arimo-Regular', Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#004aad",
                fontWeight: 400,
              }}
            >
              NAVI HEALTH?
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontFamily: "'Arimo-Regular', Helvetica",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#495565",
              fontWeight: 400,
            }}
          >
            Chúng tôi cam kết mang đến trải nghiệm quản lý sức khỏe tốt nhất với
            công nghệ hiện đại và tiêu chuẩn bảo mật cao nhất trong ngành y tế.
          </Typography>

          <Stack spacing={2}>
            {benefitsList.map((benefit, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle
                    sx={{
                      fontSize: "16px",
                      color: "white",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Arimo-Regular', Helvetica",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#354152",
                    fontWeight: 400,
                  }}
                >
                  {benefit}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Button
            variant="contained"
            endIcon={<ArrowForward sx={{ fontSize: "16px" }} />}
            sx={{
              width: "fit-content",
              height: "40px",
              borderRadius: "16px",
              background:
                "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
              color: "white",
              fontFamily: "'Arimo-Regular', Helvetica",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              textTransform: "none",
              padding: "8px 16px",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Tạo tài khoản miễn phí
          </Button>
        </Stack>

        <Box
          sx={{
            flex: 1,
            maxWidth: { md: "616px" },
            position: "relative",
            height: { xs: "300px", md: "347px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              backgroundColor: "transparent",
            }}
          >
             <Box
                component="img"
                src="https://www.lechodesarenes.com/wp-content/uploads/2021/04/Du-bon-usage-du-numerique_article_full.jpg"
                alt="Preview"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "-30px", md: "-30px" },
              left: { xs: "16px", md: "-24px" },
              width: "225px",
              height: "94px",
              backgroundColor: "white",
              borderRadius: "16px",
              border: "2px solid rgba(134, 203, 222, 0.3)",
              boxShadow:
                "0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
              padding: "16px",
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#004aad",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Arimo-Bold', Helvetica",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  👥
                </Typography>
              </Box>

              <Stack spacing={0}>
                <Typography
                  sx={{
                    fontFamily: "'Arimo-Bold', Helvetica",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#004aad",
                    fontWeight: 700,
                  }}
                >
                  10,000+
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Arimo-Regular', Helvetica",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#495565",
                    fontWeight: 400,
                  }}
                >
                  Người dùng hài lòng
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default BenefitsInfo;
