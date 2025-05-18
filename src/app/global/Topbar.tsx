import { ColorModeContext, tokens } from "@/theme";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import CurrentDateTime from "../components/CurrentDateTime";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* DATE TIME */}

      <Box
        display="flex"
        sx={{ backgroundColor: colors.primary?.[400], borderRadius: "3px" }}
      >
        <CurrentDateTime />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        flex={1}
      >
        <Typography
          variant="h1"
          align="center"
          color={colors.grey?.[100]}
          fontWeight={"bold"}
        >
          GrowPi
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{
            color: colors.grey?.[100],
            "&:hover": {
              color: "#868dfb",
            },
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton
          sx={{
            color: colors.grey?.[100],
            "&:hover": {
              color: "#868dfb",
            },
          }}
        >
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton
          sx={{
            color: colors.grey?.[100],
            "&:hover": {
              color: "#868dfb",
            },
          }}
        >
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
