import { createTheme, PaletteMode } from "@mui/material/styles";

export function setupTheme(mode?: PaletteMode) {
  const theme = createTheme({
    typography: {
      fontFamily: "var(--font-roboto)",
    },
    palette: {
      mode,
    },
  });

  return theme;
}
