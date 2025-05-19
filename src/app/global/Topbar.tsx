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

  const iconButtonStyle = {
    color: colors.grey?.[100],
    "&:hover": {
      color: "#868dfb",
    },
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={{ xs: 1, sm: 2 }} // Responsive padding
      alignItems="center" // Better vertical alignment
    >
      {/* DateTime Box */}
      <Box
        display="flex"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? colors.primary?.[400]
              : colors.primary?.[100],
          width: "200px", // Set fixed width
          justifyContent: "center",
        }}
      >
        <CurrentDateTime />
      </Box>

      {/* Center Title Box */}
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
          fontWeight="bold" // Use string instead of object notation
        >
          GrowPi
        </Typography>
      </Box>

      {/* Icons Box */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "200px", // Match width with DateTime box
          // backgroundColor:
          //   theme.palette.mode === "dark"
          //     ? colors.primary?.[400]
          //     : colors.primary?.[100],
        }}
      >
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={iconButtonStyle}
          aria-label="toggle dark mode"
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton sx={iconButtonStyle} aria-label="notifications">
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton sx={iconButtonStyle} aria-label="settings">
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
