import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    caption: {
      color: "#000",
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
});

export default theme;
