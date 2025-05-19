"use client";

import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
