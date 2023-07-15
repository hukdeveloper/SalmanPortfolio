"use client";
import theme from "@/theme";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";

import Link from "next/link";
import React, { useContext, useState } from "react";
import Home from "@mui/icons-material/Home";
import Contacts from "@mui/icons-material/Contacts";
import HistoryEdu from "@mui/icons-material/HistoryEdu";
import Workspaces from "@mui/icons-material/Workspaces";

import { usePathname, useSearchParams } from "next/navigation";
import { ThemeContext } from "../../context/ThemeContext";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
    icon: <Workspaces />,
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
    icon: <Contacts />,
  },
  {
    id: 4,
    title: "Resume",
    url: "/resume",
    icon: <HistoryEdu />,
  },
];

export default function Sidebar() {
  // const [open, setOpen] = useState(true);
  const { toggle, open } = useContext(ThemeContext);

  const matches = useMediaQuery("(max-width:768px)");
  const matchesTablet = useMediaQuery("(max-width:1000px)");

  const drawerWidth = matchesTablet ? 240 : 270;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = `${pathname}${searchParams}`;

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ".MuiPaper-root": {
          width: drawerWidth,
          backgroundImage: `url("/b1.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxSizing: "border-box",
          position: "relative",
        },
      }}
      open={open}
      variant={matches ? "temporary" : "permanent"}
      onClose={toggle}
    >
      <Toolbar />
      <Divider
        variant="fullwidth"
        sx={{
          backgroundColor: theme.palette.grey[50],
        }}
      />
      <Avatar
        src="/mainprofile.jpg"
        variant="circular"
        sx={{
          height: "180px",
          width: "180px",
          alignSelf: "center",
          margin: 2,
        }}
      />
      <Divider
        variant="middle"
        sx={{
          backgroundColor: theme.palette.grey[50],
        }}
      />
      <List
        sx={{
          margin: "25px 0 0 0",
          WebkitBackdropFilter: "blur(2px)",
          backdropFilter: "blur(2px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          background: "rgba(0, 0, 0, 0.50)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          alignSelf: "center",
          width: "100%",
        }}
      >
        {links.map((item) => (
          <Link key={item.id} href={item.url}>
            <ListItem disablePadding>
              <ListItemButton
                sx={
                  url === item.url
                    ? {
                        color: "#f6bb05",
                      }
                    : {
                        color: "#FFFFFF",
                      }
                }
                // sx={{
                //   color: "#FFFFFF",
                // }}
              >
                <ListItemIcon
                  sx={
                    url === item.url
                      ? {
                          color: "#f6bb05",
                        }
                      : {
                          color: "#FFFFFF",
                        }
                  }
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <Typography variant="h1">Welcome</Typography> */}
    </Drawer>
  );
}
