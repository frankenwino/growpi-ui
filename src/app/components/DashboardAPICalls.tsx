"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  fetchLightDetected,
  fetchTemperatureHumidity,
  fetchWaterTemperature,
} from "../services/api";
import CO2Gauge from "./gaugecards/C02Gauge";
import ECGauge from "./gaugecards/ECGauge";
import HumidityGauge from "./gaugecards/HumidityGauge";
import LightDetector from "./gaugecards/LightDetector";
import PhGauge from "./gaugecards/PhGauge";
import RoomTempGauge from "./gaugecards/RoomTempGauge";
import WaterTempGauge from "./gaugecards/WaterTempGauge";

export default function Dashboard() {
  // Example sensor data (replace these with actual data from your API or state)

  const [waterTemp, setWaterTemp] = useState<number | undefined>();
  const [lightDetected, setLightDetected] = useState<boolean | undefined>();
  const [humidity, setHumidity] = useState<number | undefined>();
  const [roomTemp, setRoomTemp] = useState<number | undefined>();

  useEffect(() => {
    const load = async () => {
      // To fix CORS issues, ensure your ASP.NET Core backend sets the appropriate headers.
      // This code assumes fetchWaterTemperature works as expected.
      const waterTempResponse = await fetchWaterTemperature("latest"); // or "sourceB"
      setWaterTemp(waterTempResponse);

      const lightDetectedResponse = await fetchLightDetected("latest"); // or "sourceB"
      setLightDetected(Boolean(lightDetectedResponse));

      const tempHumidityResponse = await fetchTemperatureHumidity("latest"); // or "sourceB"
      setHumidity(tempHumidityResponse?.humidity);
      setRoomTemp(tempHumidityResponse?.temperature);
    };
    load();
  }, []);

  const sensorData = {
    co2: 1200,
    humidity: humidity,
    ph: 6.5,
    roomTemp: roomTemp,
    waterTemp: waterTemp,
    ec: 1,
    lightDetected: lightDetected,
  };

  // type SensorData = {
  //   co2: number;
  //   humidity: number;
  //   ph: number;
  //   roomTemp: number;
  //   waterTemp: number;
  //   ec: number;
  //   lightDetected: boolean;
  // };

  // const [sensorData, setSensorData] = useState<SensorData>({
  //   co2: 0,
  //   humidity: 0,
  //   ph: 0,
  //   roomTemp: 0,
  //   waterTemp: 0,
  //   ec: 0,
  //   lightDetected: false,
  // });

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchSensorData = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       // Replace with your actual API endpoint
  //       const response = await fetch("/api/sensors/latest");
  //       if (!response.ok) throw new Error("Failed to fetch sensor data");
  //       const data = await response.json();
  //       setSensorData({
  //         co2: data.co2,
  //         humidity: data.humidity,
  //         ph: data.ph,
  //         roomTemp: data.roomTemp,
  //         waterTemp: data.waterTemp,
  //         ec: data.ec,
  //         lightDetected: data.lightDetected,
  //       });
  //     } catch (err: unknown) {
  //       setError(err instanceof Error ? err.message : "Unknown error");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchSensorData();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

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
          <LightDetector lightDetected={sensorData.lightDetected ?? false} />
        </Box>
      </Box>
    </Box>
  );
}
