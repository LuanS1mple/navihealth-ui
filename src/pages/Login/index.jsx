import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import requestApi from "../../apis/apis";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    requestApi('auth/login','POST', {
      username: email,
      password: password
    })
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  const handleBackToHome = () => {
    console.log("Back to home clicked");
  };

  const handleForgotPassword = () => {
    //call api gui email
    setTimeout(() => {
      requestApi()
    }, 2000)
  };

  const handleRegister = () => {
    console.log("Register clicked");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url(https://www.lechodesarenes.com/wp-content/uploads/2021/04/Du-bon-usage-du-numerique_article_full.jpg)',
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "35%",
          width: "30%",
          height: '70%'
        }}
      >
        <Stack spacing={3}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleBackToHome}
            sx={{
              width: "fit-content",
              color: "#519db1",
              textTransform: "none",
              fontSize: "14px",
              fontFamily: "Arimo, Helvetica, sans-serif",
              padding: 0,
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}
          >
            Quay lại trang chủ
          </Button>

          <Paper
            elevation={3}
            sx={{
              padding: "32px",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              boxShadow:
                "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "#004aad",
                  fontFamily: "Arimo, Helvetica, sans-serif",
                  fontWeight: 'bold',
                  fontSize: "16px",
                }}
              >
                Đăng nhập
              </Typography>

              <Stack spacing={2.5}>
                <Box>
                  <Typography
                    component="label"
                    htmlFor="email-input"
                    sx={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      color: "#354152",
                      fontFamily: "Arimo, Helvetica, sans-serif",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    id="email-input"
                    fullWidth
                    placeholder="Nhập email của bạn"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        height: "36px",
                        fontSize: "14px",
                        fontFamily: "Arimo, Helvetica, sans-serif",
                        "& input": {
                          padding: "4px 12px",
                        },
                        "& input::placeholder": {
                          color: "#717182",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    component="label"
                    htmlFor="password-input"
                    sx={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      color: "#354152",
                      fontFamily: "Arimo, Helvetica, sans-serif",
                    }}
                  >
                    Mật khẩu
                  </Typography>
                  <TextField
                    id="password-input"
                    fullWidth
                    placeholder="Nhập mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        height: "36px",
                        fontSize: "14px",
                        fontFamily: "Arimo, Helvetica, sans-serif",
                        "& input": {
                          padding: "4px 12px",
                        },
                        "& input::placeholder": {
                          color: "#717182",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        sx={{
                          padding: 0,
                          marginRight: "8px",
                          "& .MuiSvgIcon-root": {
                            fontSize: "16px",
                          },
                        }}
                      />
                    }
                    label="Ghi nhớ đăng nhập"
                    sx={{
                      margin: 0,
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        color: "#495565",
                        fontFamily: "Arimo, Helvetica, sans-serif",
                      },
                    }}
                  />
                  <Button
                    onClick={handleForgotPassword}
                    sx={{
                      padding: 0,
                      minWidth: "auto",
                      color: "#519db1",
                      textTransform: "none",
                      fontSize: "14px",
                      fontFamily: "Arimo, Helvetica, sans-serif",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Quên mật khẩu?
                  </Button>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogin}
                  sx={{
                    height: "44px",
                    backgroundColor: "#004aad",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontFamily: "Arimo, Helvetica, sans-serif",
                    "&:hover": {
                      backgroundColor: "#003a8c",
                    },
                  }}
                >
                  Đăng nhập
                </Button>

                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "16px",
                      color: "#495565",
                      fontFamily: "Arimo, Helvetica, sans-serif",
                    }}
                  >
                    Chưa có tài khoản?{" "}
                  </Typography>
                  <Button
                    onClick={handleRegister}
                    sx={{
                      padding: 0,
                      minWidth: "auto",
                      color: "#519db1",
                      textTransform: "none",
                      fontSize: "16px",
                      fontFamily: "Arimo, Helvetica, sans-serif",
                      verticalAlign: "baseline",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Đăng ký ngay
                  </Button>
                </Box>
              </Stack>

              <Divider sx={{ position: "relative" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    padding: "0 16px",
                    fontSize: "14px",
                    color: "#697282",
                    fontFamily: "Arimo, Helvetica, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  Hoặc đăng nhập với
                </Typography>
              </Divider>

              <Stack direction="row" spacing={1.5}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleGoogleLogin}
                  startIcon={
                    <Box
                      component="img"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='16px' height='16px'%3E%3Cpath fill='%234285F4' d='M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z'/%3E%3Cpath fill='%2334A853' d='M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z'/%3E%3Cpath fill='%23FBBC05' d='M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z'/%3E%3Cpath fill='%23EA4335' d='M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z'/%3E%3C/svg%3E"
                      sx={{ width: "16px", height: "16px" }}
                    />
                  }
                  sx={{
                    height: "36px",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontSize: "14px",
                    color: "#000",
                    borderColor: "#d0d5db",
                    fontFamily: "Arimo, Helvetica, sans-serif",
                    "&:hover": {
                      borderColor: "#a0a5ab",
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  Google
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
}
