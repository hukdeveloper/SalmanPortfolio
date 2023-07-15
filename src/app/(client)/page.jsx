"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../page.module.css";

import Button from "@mui/material/Button";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TelegramIcon from "@mui/icons-material/Telegram";
import Stack from "@mui/material/Stack";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import Paper from "@mui/material/Paper";
import { profileData } from "../../utils/homeData";
import theme from "../../theme";

export default function Home() {
  return (
    <Box
      className={styles.box}
      justifyContent={"flex-start"}
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "auto",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box className={styles.box} justifyContent={"center"} mt={8}>
        <Typography
          variant="caption"
          color={theme.palette.grey[700]}
          sx={{
            fontStyle: "italic",
            fontWeight: "600",
          }}
        >
          Hi There, I am
        </Typography>
        <Typography variant="h3" className={styles.mainTitle}>
          Salman Wali
        </Typography>
        <Typography variant="caption" textAlign={"center"}>
          <FormatQuoteIcon color="error" /> I am Esma Ramzan, an English
          linguistics lecturer at Karakorum International University Gilgit
          Baltistan. I completed my M. Phil in Applied Linguistics at the
          University of Management and Technology in 2019 and have since been
          involved in research and the relationship between language and society
        </Typography>
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="outlined"
            size="small"
            endIcon={<BookmarkIcon />}
            sx={{
              width: "150px",
            }}
          >
            My Portfolio
          </Button>
          <Button
            variant="contained"
            endIcon={<TelegramIcon />}
            color="secondary"
            sx={{
              width: "140px",
            }}
            size="small"
          >
            Contact Me
          </Button>
        </Stack>
      </Box>
      <Box
        mt={3}
        gap={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          "& > :not(style)": {
            m: 1,
            width: 130,
            height: 130,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {profileData.map((item) => (
          <Paper className={styles.paperGradient} elevation={10} key={item.id}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="caption" fontSize={"0.8rem"}>
              {item.desc}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
