import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import Chip from "@mui/material/Chip";

export default function LightDetector({
  lightDetected,
}: {
  lightDetected: boolean;
}) {
  // const apiUrl = process.env.GROWPIHUB_API_BASE_URL;
  // const latest = `${apiUrl}/LM393/latest`;

  // fetch(latest)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error("Error:", error));

  return (
    <Chip
      label={lightDetected ? "Light DETECTED" : "Light NOT DETECTED"}
      color={lightDetected ? "success" : "default"}
      icon={lightDetected ? <LightbulbIcon /> : <LightbulbOutlineIcon />}
    />
  );
}
