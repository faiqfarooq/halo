import type { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 2,
      },
      outlined: {
        backgroundColor: "#e1e8f0",
        borderColor: "#cbd5e1",
        color: "#1F2937",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      },
    },
  },
};
