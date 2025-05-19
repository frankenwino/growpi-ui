import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import Chip from "@mui/material/Chip";

export default function LightDetector({
  lightDetected,
}: {
  lightDetected: boolean;
}) {
  return (
    <Chip
      label={lightDetected ? "Light DETECTED" : "Light NOT DETECTED"}
      color={lightDetected ? "success" : "default"}
      icon={lightDetected ? <LightbulbIcon /> : <LightbulbOutlineIcon />}
    />
  );
}
