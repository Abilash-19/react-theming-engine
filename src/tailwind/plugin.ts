// src/tailwind/plugin.ts
// Tailwind CSS preset — maps CSS variables to Tailwind's theme config.
// Usage in tailwind.config.js:
//
//   const { themePreset } = require("react-theming-engine/tailwind");
//   module.exports = {
//     presets: [themePreset],
//     // ...
//   };

/**
 * Helper: wraps a CSS var reference with a fallback.
 */
function cssVar(name: string, fallback?: string): string {
  return fallback ? `var(${name}, ${fallback})` : `var(${name})`;
}

/**
 * Generates a color scale object { 50..900 } pointing to CSS vars.
 */
function colorScale(prefix: string): Record<string, string> {
  const scale: Record<string, string> = {};
  for (const step of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) {
    scale[step] = cssVar(`--color-${prefix}-${step}`);
  }
  return scale;
}

export const themePreset = {
  theme: {
    extend: {
      colors: {
        // ── Brand scales ──
        primary: colorScale("primary"),
        success: colorScale("success"),
        warning: colorScale("warning"),
        error: colorScale("error"),
        info: colorScale("info"),
        neutral: colorScale("neutral"),

        // ── Semantic tokens ──
        background: cssVar("--color-background"),
        surface: {
          DEFAULT: cssVar("--color-surface"),
          hover: cssVar("--color-surface-hover"),
        },
        elevated: cssVar("--color-elevated"),
        foreground: {
          DEFAULT: cssVar("--color-foreground"),
          muted: cssVar("--color-foreground-muted"),
          subtle: cssVar("--color-foreground-subtle"),
          inverse: cssVar("--color-foreground-inverse"),
        },
        border: {
          DEFAULT: cssVar("--color-border"),
          subtle: cssVar("--color-border-subtle"),
          strong: cssVar("--color-border-strong"),
        },
        input: {
          DEFAULT: cssVar("--color-input"),
          hover: cssVar("--color-input-hover"),
          focus: cssVar("--color-input-focus"),
        },
        ring: {
          DEFAULT: cssVar("--color-ring"),
          offset: cssVar("--color-ring-offset"),
        },
        accent: {
          DEFAULT: cssVar("--color-accent"),
          foreground: cssVar("--color-accent-foreground"),
          hover: cssVar("--color-accent-hover"),
        },

        // ── Status ──
        "success-surface": cssVar("--color-success-surface"),
        "success-foreground": cssVar("--color-success-foreground"),
        "warning-surface": cssVar("--color-warning-surface"),
        "warning-foreground": cssVar("--color-warning-foreground"),
        "error-surface": cssVar("--color-error-surface"),
        "error-foreground": cssVar("--color-error-foreground"),
        "info-surface": cssVar("--color-info-surface"),
        "info-foreground": cssVar("--color-info-foreground"),
      },
      borderRadius: {
        sm: cssVar("--radius-sm", "0.25rem"),
        md: cssVar("--radius-md", "0.375rem"),
        lg: cssVar("--radius-lg", "0.5rem"),
        full: cssVar("--radius-full", "9999px"),
      },
      fontFamily: {
        sans: cssVar("--font-sans"),
        mono: cssVar("--font-mono"),
      },
    },
  },
};
