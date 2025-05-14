import { Box, Typography } from "@mui/material";
import CO2Gauge from "./gaugecards/C02Gauge";
import ECGauge from "./gaugecards/ECGauge";
import HumidityGauge from "./gaugecards/HumidityGauge";
import LightDetector from "./gaugecards/LightDetector";
import PhGauge from "./gaugecards/PhGauge";
import RoomTempGauge from "./gaugecards/RoomTempGauge";
import WaterTempGauge from "./gaugecards/WaterTempGauge";

export default function Dashboard() {
  // Example sensor data (replace these with actual data from your API or state)
  const sensorData = {
    co2: 1200,
    humidity: 60,
    ph: 6.5,
    roomTemp: 22.5,
    waterTemp: 18.2,
    ec: 1,
    lightDetected: true,
  };

  // const apiUrl = process.env.GROWPIHUB_API_BASE_URL;
  // const latest = `${apiUrl}/LM393/latest`;

  // const { data, error, loading } = useFetch<LM393Reading>(latest);
  // console.log(data);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {String(error)}</div>;

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Sensor Dashboard
      </Typography>

      {/* Flexbox container to display gauges */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between", // Distribute space evenly
          gap: 3, // Adds spacing between items
        }}
      >
        <Box sx={{ flex: "1 1 100%", md: "1 1 30%" }}>
          <RoomTempGauge temperature={sensorData.roomTemp} />
        </Box>
        <Box sx={{ flex: "1 1 100%", md: "1 1 30%" }}>
          <HumidityGauge humidity={sensorData.humidity} />
        </Box>
        <Box sx={{ flex: "1 1 100%", md: "1 1 30%" }}>
          <CO2Gauge co2Value={sensorData.co2} />
        </Box>
        <Box sx={{ flex: "1 1 100%", md: "1 1 30%" }}>
          <WaterTempGauge temperature={sensorData.waterTemp} />
        </Box>
        <Box sx={{ flex: "1 1 100%", md: "1 1 30%" }}>
          <PhGauge phValue={sensorData.ph} />
        </Box>
        <Box sx={{ flex: "1 1 0", minWidth: 0 }}>
          <ECGauge ecValue={sensorData.ec} />
        </Box>
        <Box sx={{ flex: "1 1 100%", md: "1 1 30%" }}>
          {/* Add your LightDetector component here */}
          <LightDetector lightDetected={sensorData.lightDetected} />
        </Box>
      </Box>
    </Box>
  );
}
