// src/presets/violet.ts
// Rich purple dark theme — luxurious violet palette for premium UIs.

import type { ThemeConfig } from "../types";
import { lightTheme } from "./light";

const palette: ThemeConfig["palette"] = {
  primary: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
  },
  success: lightTheme.palette.success,
  warning: lightTheme.palette.warning,
  error: lightTheme.palette.error,
  info: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
};

const neutral: ThemeConfig["neutral"] = {
  50: "#0e0a18",
  100: "#15102a",
  200: "#1e1838",
  300: "#28204a",
  400: "#3d3364",
  500: "#5e5280",
  600: "#8478a0",
  700: "#ada4c0",
  800: "#d2ccde",
  900: "#ece9f2",
};

export const violetTheme: ThemeConfig = {
  name: "violet",
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

    successSurface: lightTheme.palette.success[900],
    successForeground: lightTheme.palette.success[300],
    warningSurface: "#78350f",
    warningForeground: "#fcd34d",
    errorSurface: "#7f1d1d",
    errorForeground: "#fca5a5",
    infoSurface: palette.info[900],
    infoForeground: palette.info[300],
  },

  shape: lightTheme.shape,
  typography: lightTheme.typography,
};
