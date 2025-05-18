import { tokens } from "@/theme";
import { ElectricBoltOutlined, WaterOutlined } from "@mui/icons-material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import Co2Outlined from "@mui/icons-material/Co2Outlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { MenuItem } from "react-pro-sidebar";

type ItemProps = {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
};

const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link href={to} />}
      style={{
        color: colors.grey?.[100] ?? "#fff",
        textDecoration: "none",
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary?.[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        // width: isCollapsed ? "60px" : "200px",
        // height: "100vh",
        backgroundColor: colors.primary?.[400] ?? "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "align",
        padding: 2,
      }}
    >
      {/* <ProSidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey?.[100] ?? "#fff",
            }}
          >
            {isCollapsed ? <HomeOutlinedIcon /> : null}
          </MenuItem> */}

      {/* <Box paddingLeft={isCollapsed ? undefined : "10%"}>
        <Item
          title="Home"
          to="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Room Temp"
          to="/history/room-temperature"
          icon={<DeviceThermostatOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Humidity"
          to="/history/humidity"
          icon={<CloudOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="CO2"
          to="/history/co2"
          icon={<Co2Outlined />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Water Temp"
          to="/history/water-temperature"
          icon={<WaterOutlined />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="pH Level"
          to="/history/ph"
          icon={<ScienceOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="EC Level"
          to="/history/ec"
          icon={<ElectricBoltOutlined />}
          selected={selected}
          setSelected={setSelected}
        />
      </Box> */}

      <Box display="flex" flexDirection="column" alignItems="center">
        <IconButton onClick={() => (window.location.pathname = "/")}>
          <HomeOutlinedIcon />
        </IconButton>

        <IconButton>
          <DeviceThermostatOutlinedIcon
            onClick={() =>
              (window.location.pathname = "/history/room-temperature")
            }
          />
        </IconButton>

        <IconButton
          onClick={() => (window.location.pathname = "/history/humidity")}
        >
          <CloudOutlinedIcon />
        </IconButton>

        <IconButton onClick={() => (window.location.pathname = "/history/co2")}>
          <Co2Outlined />
        </IconButton>

        <IconButton
          onClick={() =>
            (window.location.pathname = "/history/water-temperature")
          }
        >
          <WaterOutlined />
        </IconButton>

        <IconButton>
          <ScienceOutlinedIcon
            onClick={() => (window.location.pathname = "/history/ph")}
          />
        </IconButton>

        <IconButton>
          <ElectricBoltOutlined
            onClick={() => (window.location.pathname = "/history/ec")}
          />
        </IconButton>
      </Box>
      {/* </Menu>
      </ProSidebar> */}
    </Box>
  );
}
