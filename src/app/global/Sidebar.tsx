import { tokens } from "@/theme";
import { ElectricBoltOutlined, WaterOutlined } from "@mui/icons-material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import Co2Outlined from "@mui/icons-material/Co2Outlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { Box, IconButton, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.grey[100]
      : theme.palette.primary.main,
  "&:hover": {
    color: "#868dfb",
  },
  // Add size customization
  padding: "12px", // Increase padding around the icon
  "& .MuiSvgIcon-root": {
    fontSize: "28px", // Make the icon itself bigger (default is 24px)
  },
  margin: "4px 0", // Add some vertical spacing between buttons
}));

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "align",
        // padding: 2,
        backgroundColor:
          theme.palette.mode === "dark"
            ? colors.primary?.[400] ?? theme.palette.background.default // Use primary[400] for dark mode, fallback to default
            : undefined, // Default background for light mode
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "align",
          padding: 2,
        }}
      >
        <StyledIconButton onClick={() => (window.location.pathname = "/")}>
          <HomeOutlinedIcon />
        </StyledIconButton>

        <StyledIconButton
          onClick={() =>
            (window.location.pathname = "/history/room-temperature")
          }
        >
          <DeviceThermostatOutlinedIcon />
        </StyledIconButton>

        <StyledIconButton
          onClick={() => (window.location.pathname = "/history/humidity")}
        >
          <CloudOutlinedIcon />
        </StyledIconButton>

        <StyledIconButton
          onClick={() => (window.location.pathname = "/history/co2")}
        >
          <Co2Outlined />
        </StyledIconButton>

        <StyledIconButton
          onClick={() =>
            (window.location.pathname = "/history/water-temperature")
          }
        >
          <WaterOutlined />
        </StyledIconButton>

        <StyledIconButton
          onClick={() => (window.location.pathname = "/history/ph")}
        >
          <ScienceOutlinedIcon />
        </StyledIconButton>

        <StyledIconButton
          onClick={() => (window.location.pathname = "/history/ec")}
        >
          <ElectricBoltOutlined />
        </StyledIconButton>
        <StyledIconButton
          onClick={() => (window.location.pathname = "/history/light")}
        >
          <LightbulbOutlineIcon />
        </StyledIconButton>
      </Box>
    </Box>
  );
}
