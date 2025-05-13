import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import Chip from "@mui/material/Chip";

<Chip
  label={false ? "Light ON" : "Light OFF"}
  color={false ? "success" : "default"}
  icon={false ? <LightbulbIcon /> : <LightbulbOutlineIcon />}
/>;

function LightStatus({ isOn }: { isOn: boolean }) {
  return (
    <Chip
      label={isOn ? "Light ON" : "Light OFF"}
      color={isOn ? "success" : "default"}
      icon={isOn ? <LightbulbIcon /> : <LightbulbOutlineIcon />}
    />
  );
}

export default LightStatus;
