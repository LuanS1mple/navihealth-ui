import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Link, Stack, Typography } from "@mui/material";

const productLinks = [
  { label: "Tính năng" },
  { label: "Bảng giá" },
  { label: "Bảo mật" },
];

const supportLinks = [
  { label: "Trợ giúp" },
  { label: "Liên hệ" },
  { label: "FAQ" },
];

export const AppFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#004aad",
        pt: 6,
        pb: 0,
        px: { xs: 4, md: 8, lg: 10 },
        mt: 10,
        width: "100%",
      }}
    >
      <Stack spacing={4}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 0 }}
          sx={{
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: "624px" }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#ffffff33",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FavoriteBorderIcon sx={{ color: "white", fontSize: 24 }} />
              </Box>
              <Typography
                sx={{

                  fontWeight: 700,
                  color: "white",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: 0,
                }}
              >
                NAVI HEALTH
              </Typography>
            </Stack>
            <Typography
              sx={{

                fontWeight: 400,
                color: "#fffefecc",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: 0,
              }}
            >
              Nền tảng quản lý sức khỏe thông minh, giúp bạn chăm sóc bản thân
              và gia đình một cách hiệu quả nhất.
            </Typography>
          </Stack>

          <Stack spacing={2} sx={{ minWidth: "296px" }}>
            <Typography
              sx={{

                fontWeight: 700,
                color: "white",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: 0,
              }}
            >
              Sản phẩm
            </Typography>
            <Stack spacing={1}>
              {productLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="none"
                  sx={{

                    fontWeight: 400,
                    color: "#fffefecc",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2} sx={{ minWidth: "296px" }}>
            <Typography
              sx={{

                fontWeight: 700,
                color: "white",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: 0,
              }}
            >
              Hỗ trợ
            </Typography>
            <Stack spacing={1}>
              {supportLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="none"
                  sx={{

                    fontWeight: 400,
                    color: "#fffefecc",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Box
          sx={{
            borderTop: "1px solid #fffefe33",
            pt: 4.125,
            width: "100%",
          }}
        >
          <Typography
            sx={{

              fontWeight: 400,
              color: "#fffefe99",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: 0,
              textAlign: "center",
            }}
          >
            © 2025 NAVI HEALTH. Tất cả quyền được bảo lưu.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default AppFooter;
