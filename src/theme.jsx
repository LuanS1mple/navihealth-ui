import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 74, 173, 1)",
      light: "rgba(81, 157, 177, 1)",
      dark: "rgba(0, 74, 173, 1)",
    },
    secondary: {
      main: "rgba(81, 157, 177, 1)",
      light: "rgba(135, 199, 236, 1)",
      dark: "rgba(81, 157, 177, 1)",
    },
    background: {
      default: "rgba(255, 255, 255, 1)",
      paper: "rgba(255, 255, 255, 1)",
    },
    text: {
      primary: "rgba(73, 85, 101, 1)",
      secondary: "rgba(153, 161, 174, 1)",
      disabled: "rgba(105, 114, 130, 1)",
    },
    grey: {
      50: "rgba(249, 250, 251, 1)",
      100: "rgba(229, 231, 235, 1)",
      200: "rgba(229, 231, 235, 1)",
      300: "rgba(209, 213, 219, 1)",
      400: "rgba(156, 163, 175, 1)",
      500: "rgba(107, 114, 128, 1)",
      600: "rgba(75, 85, 99, 1)",
      700: "rgba(55, 65, 81, 1)",
      800: "rgba(31, 41, 55, 1)",
      900: "rgba(17, 24, 39, 1)",
    },
    info: {
      main: "rgba(135, 199, 236, 1)",
      light: "rgba(135, 199, 236, 0.2)",
      dark: "rgba(81, 157, 177, 1)",
    },
    success: {
      main: "rgba(81, 157, 177, 1)",
    },
    white: "rgba(255, 255, 255, 1)",
    blue: {
      main: "rgba(0, 74, 173, 1)",
      light: "rgba(81, 157, 177, 1)",
      lighter: "rgba(135, 199, 236, 1)",
      lightest: "rgba(135, 199, 236, 0.2)",
    },
    teal: {
      main: "rgba(81, 157, 177, 1)",
      light: "rgba(134, 203, 222, 1)",
    },
    border: {
      main: "rgba(134, 203, 222, 0.3)",
      light: "rgba(81, 157, 177, 0.3)",
    },
    overlay: {
      white: "rgba(255, 255, 255, 0.8)",
      whiteLight: "rgba(255, 255, 255, 0.6)",
      whiteLighter: "rgba(255, 255, 255, 0.2)",
    },
    gradient: {
      primary:
        "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
      background:
        "linear-gradient(180deg, rgba(240, 249, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(232, 244, 248, 1) 100%)",
      benefits:
        "linear-gradient(117deg, rgba(81, 157, 177, 0.05) 0%, rgba(135, 199, 236, 0.1) 100%)",
    },
  },
  typography: {
    fontFamily: "'Arimo', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "48px",
      letterSpacing: "0",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "36px",
      letterSpacing: "0",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "30px",
      letterSpacing: "0",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: "0",
    },
    button: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "16px",
          padding: "8px 16px",
        },
        contained: {
          background:
            "linear-gradient(180deg, rgba(81, 157, 177, 1) 0%, rgba(0, 74, 173, 1) 100%)",
          color: "rgba(255, 255, 255, 1)",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: "rgba(81, 157, 177, 1)",
          color: "rgba(81, 157, 177, 1)",
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
  ],
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
