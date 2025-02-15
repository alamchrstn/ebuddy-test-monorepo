"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { setupTheme } from "../theme/mui";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const muiTheme = setupTheme(prefersDarkMode ? "dark" : "light");

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
