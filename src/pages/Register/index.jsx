import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const formFields = [
  {
    label: "Họ và tên",
    placeholder: "Nhập họ và tên",
    type: "text",
    id: "fullname",
  },
  {
    label: "Email",
    placeholder: "Nhập email của bạn",
    type: "email",
    id: "email",
  },
  {
    label: "Số điện thoại",
    placeholder: "Nhập số điện thoại",
    type: "tel",
    id: "phone",
  },
  {
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    type: "password",
    id: "password",
  },
  {
    label: "Xác nhận mật khẩu",
    placeholder: "Nhập lại mật khẩu",
    type: "password",
    id: "confirmPassword",
  },
];

const socialButtons = [
  {
    name: "Google",
    icon: (
      <Box sx={{ width: 16, height: 16, position: "relative", mr: 1 }}>
        <Box
          component="img"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%234285F4' d='M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z'/%3E%3Cpath fill='%2334A853' d='M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z'/%3E%3Cpath fill='%23FBBC05' d='M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z'/%3E%3Cpath fill='%23EA4335' d='M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z'/%3E%3C/svg%3E"
          alt="Google"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <Box sx={{ width: 16, height: 16, position: "relative", mr: 1 }}>
        <Box
          component="img"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%231877F2' d='M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z'/%3E%3C/svg%3E"
          alt="Facebook"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
    ),
  },
];

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (id) => (event) => {
    setFormData({ ...formData, [id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setAgreedToTerms(event.target.checked);
  };

  const handleRegister = () => {
    console.log("Register clicked", formData);
  };

  const handleSocialLogin = (provider) => () => {
    console.log(`Login with ${provider}`);
  };

  const handleBackToHome = () => {
    console.log("Back to home");
  };

  const handleLoginNow = () => {
    console.log("Login now");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(https://www.lechodesarenes.com/wp-content/uploads/2021/04/Du-bon-usage-du-numerique_article_full.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Stack spacing={3} sx={{ position: "relative", zIndex: 1, width: 448 }}>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "20px",
            boxShadow:
              "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            padding: "32px",
            paddingBottom: "32px",
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                color: "#004aad",
                textAlign: "center",
                fontFamily: "Arimo-Regular, Helvetica",
                fontSize: 16,
                fontWeight: 400,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
               <Button
                  startIcon={<ArrowBackIcon />}
                  onClick={handleBackToHome}
                  sx={{
                    alignSelf: "flex-start",
                    color: "#519db1",
                    textTransform: "none",
                    fontFamily: "Arimo-Regular, Helvetica",
                    fontSize: 14,
                    padding: 0,
                    minWidth: "auto",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                Quay lại trang chủ
              </Button>
              Đăng ký tài khoản
            </Typography>

            <Stack spacing={2.5}>
              {formFields.map((field) => (
                <Stack key={field.id} spacing={1}>
                  <Typography
                    component="label"
                    htmlFor={field.id}
                    sx={{
                      fontFamily: "Arimo-Regular, Helvetica",
                      fontSize: 14,
                      color: "#354152",
                      lineHeight: "14px",
                    }}
                  >
                    {field.label}
                  </Typography>
                  <TextField
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleInputChange(field.id)}
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: 36,
                        borderRadius: "12px",
                        backgroundColor: "white",
                        fontFamily: "Arimo-Regular, Helvetica",
                        fontSize: 14,
                        "& input": {
                          padding: "4px 12px",
                          color: "#717182",
                        },
                        "& fieldset": {
                          borderColor: "rgba(0, 0, 0, 0.23)",
                        },
                      },
                    }}
                  />
                </Stack>
              ))}

              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreedToTerms}
                    onChange={handleCheckboxChange}
                    sx={{
                      padding: 0,
                      marginRight: 1,
                      "& .MuiSvgIcon-root": {
                        fontSize: 16,
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontFamily: "Arimo-Regular, Helvetica",
                      fontSize: 14,
                      color: "#495565",
                    }}
                  >
                    Tôi đồng ý với{" "}
                    <Link
                      href="#"
                      sx={{
                        color: "#519db1",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Điều khoản dịch vụ
                    </Link>{" "}
                    và{" "}
                    <Link
                      href="#"
                      sx={{
                        color: "#519db1",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Chính sách bảo mật
                    </Link>
                  </Typography>
                }
                sx={{ margin: 0, alignItems: "flex-start" }}
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleRegister}
                sx={{
                  height: 44,
                  backgroundColor: "#004aad",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontFamily: "Arimo-Regular, Helvetica",
                  fontSize: 14,
                  fontWeight: 400,
                  "&:hover": {
                    backgroundColor: "#003a8c",
                  },
                }}
              >
                Đăng ký
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Arimo-Regular, Helvetica",
                    fontSize: 16,
                    color: "#495565",
                  }}
                >
                  Đã có tài khoản?{" "}
                </Typography>
                <Link
                  href="#"
                  onClick={handleLoginNow}
                  sx={{
                    fontFamily: "Arimo-Regular, Helvetica",
                    fontSize: 16,
                    color: "#519db1",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Đăng nhập ngay
                </Link>
              </Box>
            </Stack>

            <Divider sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontFamily: "Arimo-Regular, Helvetica",
                  fontSize: 14,
                  color: "#697282",
                  backgroundColor: "white",
                  padding: "0 16px",
                }}
              >
                Hoặc đăng ký với
              </Typography>
            </Divider>

            <Stack direction="row" spacing={1.5}>
              {socialButtons.map((social) => (
                <Button
                  key={social.name}
                  variant="outlined"
                  fullWidth
                  onClick={handleSocialLogin(social.name)}
                  sx={{
                    height: 36,
                    borderRadius: "12px",
                    borderColor: "rgba(0, 0, 0, 0.23)",
                    color: "#000",
                    textTransform: "none",
                    fontFamily: "Arimo-Regular, Helvetica",
                    fontSize: 14,
                    fontWeight: 400,
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                      borderColor: "rgba(0, 0, 0, 0.23)",
                    },
                  }}
                >
                  {social.icon}
                  {social.name}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Register;
