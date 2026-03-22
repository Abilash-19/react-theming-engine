// src/presets/sunset.ts
// Warm amber/orange light theme — golden-hour vibes.

import type { ThemeConfig } from "../types";
import { lightTheme } from "./light";

const palette: ThemeConfig["palette"] = {
  primary: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  success: lightTheme.palette.success,
  warning: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
  },
  error: lightTheme.palette.error,
  info: lightTheme.palette.info,
};

const neutral: ThemeConfig["neutral"] = {
  50: "#fefcfb",
  100: "#faf5f2",
  200: "#f0e8e2",
  300: "#ddd2c8",
  400: "#b8a898",
  500: "#8c7a6a",
  600: "#6b5a4c",
  700: "#504132",
  800: "#382a1e",
  900: "#1c1410",
};

export const sunsetTheme: ThemeConfig = {
  name: "sunset",
  colorMode: "light",
  palette,
  neutral,

  tokens: {
    background: neutral[50],
    surface: "#ffffff",
    surfaceHover: neutral[100],
    elevated: "#ffffff",

    foreground: neutral[900],
    foregroundMuted: neutral[500],
    foregroundSubtle: neutral[400],
    foregroundInverse: "#ffffff",

    border: neutral[200],
    borderSubtle: neutral[100],
    borderStrong: neutral[400],

    input: "#ffffff",
    inputHover: neutral[50],
    inputFocus: "#ffffff",

    ring: palette.primary[500],
    ringOffset: "#ffffff",

    accent: palette.primary[500],
    accentForeground: "#ffffff",
    accentHover: palette.primary[600],

    successSurface: lightTheme.palette.success[50],
    successForeground: lightTheme.palette.success[700],
    warningSurface: palette.warning[50],
    warningForeground: palette.warning[700],
    errorSurface: lightTheme.palette.error[50],
    errorForeground: lightTheme.palette.error[700],
    infoSurface: lightTheme.palette.info[50],
    infoForeground: lightTheme.palette.info[700],
  },

  shape: lightTheme.shape,
  typography: lightTheme.typography,
};
