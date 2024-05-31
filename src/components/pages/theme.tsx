import { ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { createContext } from "react";

import { getTheme } from "@/utils/mui";

export const ColorModeContext = createContext({
  toggleColorMode: () => {
    return;
  },
  darkMode: "dark",
});

export const Theme = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      darkMode: mode,
    }),
    [mode]
  );
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

