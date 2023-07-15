"use client";

import React, { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import theme from "../../theme";
import { ThemeContext } from "../../context/ThemeContext";
import Link from "next/link";

export default function Topbar() {
  const { toggle, mode } = useContext(ThemeContext);

  console.log(mode);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          height: "50px",
          zIndex: "9",
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        <Toolbar>
          <Box flexGrow={1}>
            {mode && (
              <IconButton
                size="small"
                color="primary"
                aria-label="open drawer"
                sx={{ mr: 2, mb: 1 }}
                onClick={toggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
          <IconButton
            size="small"
            color="primary"
            sx={{ mr: 2, mb: 1, display: "flex", gap: 1 }}
            onClick={toggle}
          >
            <Link href={"https://www.facebook.com/"} target="_blank">
              <FacebookIcon />
            </Link>
            <Link href={"https://www.facebook.com/"} target="_blank">
              <InstagramIcon />
            </Link>
            <Link href={"https://www.facebook.com/"} target="_blank">
              <TwitterIcon />
            </Link>
            <Link href={"https://www.facebook.com/"} target="_blank">
              <LinkedInIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
