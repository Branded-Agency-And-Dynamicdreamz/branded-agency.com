import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  navHeight: 72,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Mulish, sans-serif",
    secondary: "Ambit, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#1519ba",
      light: "#FFFFFF",
      dark: "#091118",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#6649c3",
      light: "#1F1D2F",
      dark: "#1F1D2F",
    },
    tertiary: {
      main: "#f0a5b6",
      light: "#f3bac7",
    },
    text: {
      primary: "#4a5568",
      secondary: "#F26B2A",
      content: "#000000",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Mulish", "Open Sans", "Arial", sans-serif`,
  },
})

export default theme
