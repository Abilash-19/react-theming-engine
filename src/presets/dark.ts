// src/presets/dark.ts
// Dark theme — uses its own indigo primary palette (distinct from light's pink).
// Defines its own full token set to avoid stale light-mode values leaking in.

import type { ThemeConfig } from "../types";
import { lightTheme } from "./light";

// Dark mode gets its own primary: Indigo
const darkPrimary: ThemeConfig["palette"]["primary"] = {
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
};

const palette: ThemeConfig["palette"] = {
  primary: darkPrimary,
  success: lightTheme.palette.success,
  warning: lightTheme.palette.warning,
  error: lightTheme.palette.error,
  info: lightTheme.palette.info,
};

// Dark-mode neutral — inverted lightness
const darkNeutral: ThemeConfig["neutral"] = {
  50: "#080808",
  100: "#101010",
  200: "#181818",
  300: "#202020",
  400: "#383838",
  500: "#585858",
  600: "#787878",
  700: "#a0a0a0",
  800: "#c8c8c8",
  900: "#f2f2f2",
};

export const darkTheme: ThemeConfig = {
  name: "dark",
  colorMode: "dark",
  palette,
  neutral: darkNeutral,

  tokens: {
    // Layout
    background: darkNeutral[50],
    surface: darkNeutral[100],
    surfaceHover: darkNeutral[200],
    elevated: darkNeutral[200],

    // Text
    foreground: darkNeutral[900],
    foregroundMuted: darkNeutral[700],
    foregroundSubtle: darkNeutral[600],
    foregroundInverse: "#0b0f14",

    // Borders
    border: darkNeutral[300],
    borderSubtle: darkNeutral[200],
    borderStrong: darkNeutral[400],

    // Inputs
    input: darkNeutral[200],
    inputHover: darkNeutral[300],
    inputFocus: darkNeutral[100],

    // Focus
    ring: darkPrimary[400],
    ringOffset: darkNeutral[100],

    // Accent — lighter shade works better on dark backgrounds
    accent: darkPrimary[500],
    accentForeground: "#ffffff",
    accentHover: darkPrimary[400],

    // Status — darker surfaces, lighter text for dark mode
    successSurface: lightTheme.palette.success[900],
    successForeground: lightTheme.palette.success[300],
    warningSurface: lightTheme.palette.warning[900],
    warningForeground: lightTheme.palette.warning[300],
    errorSurface: lightTheme.palette.error[900],
    errorForeground: lightTheme.palette.error[300],
    infoSurface: lightTheme.palette.info[900],
    infoForeground: lightTheme.palette.info[300],
  },

  shape: lightTheme.shape,
  typography: lightTheme.typography,
};
