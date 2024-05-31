import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") => {
  const isLight = mode == "light";
  const theme = createTheme({
    typography: {
      fontFamily: 'Noto Sans JP',
    },
    components: {
      MuiTypography: {
        defaultProps: {
          color:  "text.primary",
        },
      },
    },
    palette: {
      mode,
      ...(isLight
        ? {
            text: { primary: "#212121", secondary: "#757575" },
            textcolor: "#7094A5",
          }
        : {
            text: { primary: "#B9B9B9", secondary: "#6D6D6D" },
            textcolor: "#B9B9B9",
          }),
    },
  })
  return theme;
};
