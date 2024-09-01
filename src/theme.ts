"use client";

import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const font = Shippori_Mincho({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default defaultTheme;
