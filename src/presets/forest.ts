// src/presets/forest.ts
// Lush green dark theme — earthy tones with emerald accents.

import type { ThemeConfig } from "../types";
import { lightTheme } from "./light";

const palette: ThemeConfig["palette"] = {
  primary: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  warning: lightTheme.palette.warning,
  error: lightTheme.palette.error,
  info: lightTheme.palette.info,
};

const neutral: ThemeConfig["neutral"] = {
  50: "#071209",
  100: "#0d1f12",
  200: "#142d1b",
  300: "#1c3d26",
  400: "#2d5a3a",
  500: "#4a7a5a",
  600: "#72a07e",
  700: "#9ebfa6",
  800: "#c8dece",
  900: "#e8f2eb",
};

export const forestTheme: ThemeConfig = {
  name: "forest",
  colorMode: "dark",
  palette,
  neutral,

  tokens: {
    background: neutral[50],
    surface: neutral[100],
    surfaceHover: neutral[200],
    elevated: neutral[200],

    foreground: neutral[900],
    foregroundMuted: neutral[700],
    foregroundSubtle: neutral[600],
    foregroundInverse: neutral[50],

    border: neutral[300],
    borderSubtle: neutral[200],
    borderStrong: neutral[400],

    input: neutral[200],
    inputHover: neutral[300],
    inputFocus: neutral[100],

    ring: palette.primary[400],
    ringOffset: neutral[100],

    accent: palette.primary[400],
    accentForeground: "#ffffff",
    accentHover: palette.primary[300],

    successSurface: palette.success[900],
    successForeground: palette.success[300],
    warningSurface: "#78350f",
    warningForeground: "#fcd34d",
    errorSurface: "#7f1d1d",
    errorForeground: "#fca5a5",
    infoSurface: "#164e63",
    infoForeground: "#67e8f9",
  },

  shape: lightTheme.shape,
  typography: lightTheme.typography,
};
