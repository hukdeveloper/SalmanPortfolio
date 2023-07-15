"use client";

import { useMediaQuery } from "@mui/material";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(true);
  const [open, setOpen] = useState(true);

  const matches = useMediaQuery("(max-width:768px)");

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <ThemeContext.Provider
      value={matches ? { toggle, mode, open } : { toggle, open }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
