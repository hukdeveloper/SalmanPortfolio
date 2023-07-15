"use client";
import theme from "@/theme";
import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
