import { createTheme } from "@mui/material/styles";

let companyTheme = createTheme({
  palette: {
    primary: {
      main: "#3031a5",
    },
    secondary: {
      main: "#ff7629",
      dark: "#f55a00",
      contrastText: "#ffffff",
    },
    info: {
      main: "#ffffff",
      dark: "#e6e6e6",
      contrastText: "#000000",
    },
  },
});

companyTheme = createTheme(companyTheme, {
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "65px",
          lineHeight: "70px",
          [companyTheme.breakpoints.down("xl")]: {
            fontSize: "55px",
            lineHeight: "60px",
          },
          [companyTheme.breakpoints.down("lg")]: {
            fontSize: "50px",
            lineHeight: "55px",
          },
          [companyTheme.breakpoints.down("md")]: {
            fontSize: "45px",
            lineHeight: "50px",
          },
          [companyTheme.breakpoints.down("sm")]: {
            fontSize: "30px",
            lineHeight: "35px",
          },
        },
        h2: {
          fontSize: "55px",
          lineHeight: "60px",
          [companyTheme.breakpoints.down("lg")]: {
            fontSize: "45px",
            lineHeight: "50px",
          },
          [companyTheme.breakpoints.down("md")]: {
            fontSize: "40px",
            lineHeight: "45px",
          },
          [companyTheme.breakpoints.down("sm")]: {
            fontSize: "25px",
            lineHeight: "30px",
          },
        },
        h3: {
          fontSize: "35px",
          lineHeight: "40px",
          [companyTheme.breakpoints.down("md")]: {
            fontSize: "25px",
            lineHeight: "30px",
          },
          [companyTheme.breakpoints.down("sm")]: {
            fontSize: "20px",
            lineHeight: "25px",
          },
        },
        h5: {
          fontSize: "25px",
          lineHeight: "30px",
          [companyTheme.breakpoints.down("md")]: {
            fontSize: "20px",
            lineHeight: "25px",
          },
          [companyTheme.breakpoints.down("sm")]: {
            fontSize: "18px",
            lineHeight: "23px",
          },
        },
        body1: {
          lineHeight: "22px",
          [companyTheme.breakpoints.down("sm")]: {
            fontSize: "14px",
            lineHeight: "20px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          display: "inline-block",
          verticalAlign: "middle",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          transition: "all 0.4s",
          whiteSpace: "nowrap",
          minWidth: "auto",
          fontSize: "16px",
          lineHeight: "23px",
          padding: "11px 25px",
          textTransform: "none",
          boxShadow: "none !important",
          [companyTheme.breakpoints.down("md")]: {
            padding: "10px 16px",
          },
          [companyTheme.breakpoints.down("sm")]: {
            padding: "8px 12px",
            fontSize: "14px",
            lineHeight: "20px",
          },
        },
      },
    },
  },
});

export default companyTheme;
