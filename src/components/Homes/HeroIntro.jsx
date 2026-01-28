import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonOutline from "@mui/icons-material/PersonOutline";
import { Box, Button, Stack, Typography } from "@mui/material";

export const HeadBar = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderBottom: "1px solid rgba(134, 203, 222, 0.2)",
        py: "0px",
        pb: "1px",
        px: { xs: 2, sm: 4, md: "344.5px" },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "70px" }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "14px",
              background:
                "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LocalHospitalIcon
              sx={{
                width: "20px",
                height: "17px",
                color: "white",
              }}
            />
          </Box>

          <Typography
            sx={{

              fontWeight: 700,
              color: "#004aad",
              fontSize: "30px",
              lineHeight: "36px",
              letterSpacing: "0",
              whiteSpace: "nowrap",
            }}
          >
            NAVI HEALTH
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Button
            sx={{
              borderRadius: "8px",
              padding: "8px 12px",
              minWidth: "auto",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <PersonOutline
              sx={{
                width: "16px",
                height: "16px",
                color: "#495565",
                mr: 1,
              }}
            />
            <Typography
              sx={{

                fontWeight: 400,
                color: "#495565",
                fontSize: "16px",
                letterSpacing: "0",
                lineHeight: "20px",
                whiteSpace: "nowrap",
              }}
            >
              Admin
            </Typography>
          </Button>

          <Button
            sx={{
              borderRadius: "8px",
              padding: "8px 16px",
              minWidth: "auto",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Typography
              sx={{

                fontWeight: 400,
                color: "#519db1",
                fontSize: "16px",
                letterSpacing: "0",
                lineHeight: "20px",
                whiteSpace: "nowrap",
              }}
            >
              Đăng nhập
            </Typography>
          </Button>

          <Button
            sx={{
              borderRadius: "14px",
              padding: "8px 16px",
              background:
                "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
              textTransform: "none",
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
              },
            }}
          >
            <Typography
              sx={{

                fontWeight: 400,
                color: "white",
                fontSize: "16px",
                letterSpacing: "0",
                lineHeight: "20px",
                whiteSpace: "nowrap",
              }}
            >
              Đăng ký ngay
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeadBar;
