import type { ThemeOptions } from "@mui/material/styles";

export function remToPx(value: string): number {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

interface ResponsiveFontSizesOptions {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl?: number;
}

export function responsiveFontSizes(options: ResponsiveFontSizesOptions): {
  [key: string]: { fontSize: string };
} {
  const { xs, sm, md, lg, xl } = options;
  return {
    "@media (max-width:599.95px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px) and (max-width:899.95px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px) and (max-width:1199.95px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px) and (max-width:1535.95px)": {
      fontSize: pxToRem(lg),
    },
    ...(xl && {
      "@media (min-width:1536px)": {
        fontSize: pxToRem(xl),
      },
    }),
  };
}

export const typography: ThemeOptions["typography"] = {
  fontFamily: '"Rubik", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 28, // 1.75rem
      sm: 32, // 2rem
      md: 36, // 2.25rem
      lg: 40, // 2.5rem
      xl: 44, // 2.75rem
    }),
  },
  h2: {
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 24, // 1.5rem
      sm: 28, // 1.75rem
      md: 30, // 1.875rem
      lg: 32, // 2rem
      xl: 36, // 2.25rem
    }),
  },
  h3: {
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 20, // 1.25rem
      sm: 24, // 1.5rem
      md: 26, // 1.625rem
      lg: 28, // 1.75rem
      xl: 30, // 1.875rem
    }),
  },
  h4: {
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 18, // 1.125rem
      sm: 20, // 1.25rem
      md: 22, // 1.375rem
      lg: 24, // 1.5rem
      xl: 26, // 1.625rem
    }),
  },
  h5: {
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 16, // 1rem
      sm: 18, // 1.125rem
      md: 20, // 1.25rem
      lg: 24, // 1.5rem
      xl: 26, // 1.625rem
    }),
  },
  h6: {
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 14, // 0.875rem
      sm: 16, // 1rem
      md: 18, // 1.125rem
      lg: 20, // 1.25rem
      xl: 22, // 1.375rem
    }),
  },
  body1: {
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 14, // 0.875rem
      sm: 15, // 0.9375rem
      md: 16, // 1rem
      lg: 16, // 1rem
    }),
  },
  body2: {
    lineHeight: 1.6,
    ...responsiveFontSizes({
      xs: 12, // 0.75rem
      sm: 13, // 0.8125rem
      md: 14, // 0.875rem
      lg: 14, // 0.875rem
    }),
  },
  subtitle1: {
    fontWeight: 500,
    ...responsiveFontSizes({
      xs: 14, // 0.875rem
      sm: 15, // 0.9375rem
      md: 16, // 1rem
      lg: 16, // 1rem
    }),
  },
  subtitle2: {
    fontWeight: 500,
    ...responsiveFontSizes({
      xs: 12, // 0.75rem
      sm: 13, // 0.8125rem
      md: 14, // 0.875rem
      lg: 14, // 0.875rem
    }),
  },
  caption: {
    ...responsiveFontSizes({
      xs: 10, // 0.625rem
      sm: 11, // 0.6875rem
      md: 12, // 0.75rem
      lg: 12, // 0.75rem
    }),
  },
  overline: {
    textTransform: "uppercase",
    ...responsiveFontSizes({
      xs: 10, // 0.625rem
      sm: 11, // 0.6875rem
      md: 12, // 0.75rem
      lg: 12, // 0.75rem
    }),
  },
  button: {
    textTransform: "none",
    fontWeight: 600,
    ...responsiveFontSizes({
      xs: 13, // 0.8125rem
      sm: 14, // 0.875rem
      md: 14, // 0.875rem
      lg: 14, // 0.875rem
    }),
  },
};
