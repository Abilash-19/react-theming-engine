// src/presets/ocean.ts
// Deep-sea blue theme — calming dark palette with sky-blue accents.

import type { ThemeConfig } from "../types";
import { lightTheme } from "./light";

const palette: ThemeConfig["palette"] = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  success: lightTheme.palette.success,
  warning: lightTheme.palette.warning,
  error: lightTheme.palette.error,
  info: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
};

const neutral: ThemeConfig["neutral"] = {
  50: "#0a1628",
  100: "#0f1f36",
  200: "#162a45",
  300: "#1d3557",
  400: "#2a4a6e",
  500: "#4a6f8f",
  600: "#7a9fb8",
  700: "#a8c4d6",
  800: "#cddee8",
  900: "#e8f0f5",
};

export const oceanTheme: ThemeConfig = {
  name: "ocean",
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

    successSurface: "#14532d",
    successForeground: "#86efac",
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
