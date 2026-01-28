import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#004aad",
      light: "#519db1",
      dark: "#003a8a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#519db1",
      light: "#86cbde",
      dark: "#3d7a8a",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
      disabled: "#94a3b8",
    },
    divider: "rgba(134, 203, 222, 0.2)",
  },
  typography: {
    fontFamily: "'Be Vietnam Pro', 'Inter', 'Arimo', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    h4: { fontSize: "1.25rem", fontWeight: 600 },
    h5: { fontSize: "1.1rem", fontWeight: 600 },
    h6: { fontSize: "1rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        contained: {
          background: "linear-gradient(135deg, #519db1 0%, #004aad 100%)",
          boxShadow: "0 4px 12px rgba(0, 74, 173, 0.2)",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0, 74, 173, 0.3)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
          boxShadow: "4px 0 24px rgba(0, 0, 0, 0.02)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: "#f8fafc",
            "& fieldset": { borderColor: "rgba(134, 203, 222, 0.3)" },
            "&:hover fieldset": { borderColor: "#519db1" },
          },
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
