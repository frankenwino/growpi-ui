"use client";
import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

// colour design tokens
const grey = {
  100: "#d1d9ff",
  200: "#a3b3ff",
  300: "#748cff",
  400: "#4666ff",
  500: "#183fff",
  600: "#1333cc",
  700: "#0e2699",
  800: "#0a1a66",
  900: "#050d33",
};

const primary = {
  100: "#d0d1d5",
  200: "#a1a4ab",
  300: "#727681",
  400: "#1f2a40",
  500: "#141b2d",
  600: "#101624",
  700: "#0c101b",
  800: "#080b12",
  900: "#040509",
};

const greenAccent = {
  100: "#dbf5ee",
  200: "#b7ebde",
  300: "#94e2cd",
  400: "#70d8bd",
  500: "#4cceac",
  600: "#3da58a",
  700: "#2e7c67",
  800: "#1e5245",
  900: "#0f2922",
};

const redAccent = {
  100: "#f8dcdb",
  200: "#f1b9b7",
  300: "#e99592",
  400: "#e2726e",
  500: "#db4f4a",
  600: "#af3f3b",
  700: "#832f2c",
  800: "#58201e",
  900: "#2c100f",
};

const blueAccent = {
  100: "#e1e2fe",
  200: "#c3c6fd",
  300: "#a4a9fc",
  400: "#868dfb",
  500: "#6870fa",
  600: "#535ac8",
  700: "#3e4396",
  800: "#2a2d64",
  900: "#151632",
};

const greyDescending = {
  100: "#050d33",
  200: "#0a1a66",
  300: "#0e2699",
  400: "#1333cc",
  500: "#183fff",
  600: "#4666ff",
  700: "#748cff",
  800: "#a3b3ff",
  900: "#d1d9ff",
};

const primaryDescending = {
  100: "#040509",
  200: "#080b12",
  300: "#0c101b",
  400: "#f2f0f0",
  500: "#141b2d",
  600: "#1f2a40",
  700: "#727681",
  800: "#a1a4ab",
  900: "#d0d1d5",
};

const greenAccentDescending = {
  100: "#0f2922",
  200: "#1e5245",
  300: "#2e7c67",
  400: "#3da58a",
  500: "#4cceac",
  600: "#70d8bd",
  700: "#94e2cd",
  800: "#b7ebde",
  900: "#dbf5ee",
};

const redAccentDescending = {
  100: "#2c100f",
  200: "#58201e",
  300: "#832f2c",
  400: "#af3f3b",
  500: "#db4f4a",
  600: "#e2726e",
  700: "#e99592",
  800: "#f1b9b7",
  900: "#f8dcdb",
};

const blueAccentDescending = {
  100: "#151632",
  200: "#2a2d64",
  300: "#3e4396",
  400: "#535ac8",
  500: "#6870fa",
  600: "#868dfb",
  700: "#a4a9fc",
  800: "#c3c6fd",
  900: "#e1e2fe",
};

// colour design tokens
export const tokens = (mode: PaletteMode) =>
  mode === "dark"
    ? {
        grey,
        primary,
        greenAccent,
        redAccent,
        blueAccent,
      }
    : {
        greyDescending,
        primaryDescending,
        greenAccentDescending,
        redAccentDescending,
        blueAccentDescending,
      };

// Mui theme setings )
export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary?.[500] ?? "#141b2d",
            },
            secondary: {
              main: colors.greenAccent?.[500] ?? "#4cceac",
            },
            neutral: {
              dark: colors.grey?.[700] ?? "#0e2699",
              main: colors.grey?.[500] ?? "#183fff",
              light: colors.grey?.[100] ?? "#d1d9ff",
            },
            background: {
              default: colors.primary?.[500] ?? "#141b2d",
              paper: colors.primary?.[500] ?? "#141b2d",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primaryDescending?.[100] ?? "#040509",
            },
            secondary: {
              main: colors.greenAccentDescending?.[500] ?? "#4cceac",
            },
            neutral: {
              dark: colors.greyDescending?.[700] ?? "#748cff",
              main: colors.greyDescending?.[500] ?? "#183fff",
              light: colors.greyDescending?.[100] ?? "#050d33",
            },
            background: {
              default: "#fcfcfc",
              paper: "#f5f5f5", // Changed from "#fcfcfc" to a slightly darker shade
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev: PaletteMode) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode] as const;
};
