import { tokens } from "@/theme";
import { ElectricBoltOutlined, WaterOutlined } from "@mui/icons-material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import Co2Outlined from "@mui/icons-material/Co2Outlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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
}));

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        // Update background color based on theme mode
        backgroundColor:
          theme.palette.mode === "dark"
            ? colors.primary?.[400] ?? theme.palette.background.default
            : theme.palette.grey[50], // Much lighter grey for light mode
        display: "flex",
        flexDirection: "column",
        justifyContent: "align",
        padding: 2,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <StyledIconButton onClick={() => (window.location.pathname = "/")}>
          <HomeOutlinedIcon />
        </StyledIconButton>

        <StyledIconButton>
          <DeviceThermostatOutlinedIcon
            onClick={() =>
              (window.location.pathname = "/history/room-temperature")
            }
          />
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

        <StyledIconButton>
          <ScienceOutlinedIcon
            onClick={() => (window.location.pathname = "/history/ph")}
          />
        </StyledIconButton>

        <StyledIconButton>
          <ElectricBoltOutlined
            onClick={() => (window.location.pathname = "/history/ec")}
          />
        </StyledIconButton>
      </Box>
    </Box>
  );
}
