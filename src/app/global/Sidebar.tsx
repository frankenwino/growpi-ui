import { ElectricBoltOutlined, WaterOutlined } from "@mui/icons-material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import Co2Outlined from "@mui/icons-material/Co2Outlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { Box, IconButton } from "@mui/material";
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "align",
        padding: 2,
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
      </Box>
    </Box>
  );
}
