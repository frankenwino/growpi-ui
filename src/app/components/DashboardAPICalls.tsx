"use client";

import { Box, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  fetchCO2,
  fetchEC,
  fetchLightDetected,
  fetchPH,
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
  const [waterTemp, setWaterTemp] = useState<number | undefined>();
  const [lightDetected, setLightDetected] = useState<boolean | undefined>();
  const [humidity, setHumidity] = useState<number | undefined>();
  const [roomTemp, setRoomTemp] = useState<number | undefined>();
  const [co2, setCo2] = useState<number | undefined>();
  const [ph, setPh] = useState<number | undefined>();
  const [ec, setEc] = useState<number | undefined>();

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      // setIsLoading(true);
      // To fix CORS issues, ensure your ASP.NET Core backend sets the appropriate headers.
      const waterTempResponse = await fetchWaterTemperature("current"); // or "latest"
      setWaterTemp(waterTempResponse?.temperature);

      const lightDetectedResponse = await fetchLightDetected("current");
      setLightDetected(lightDetectedResponse?.light_detected);

      const tempHumidityResponse = await fetchTemperatureHumidity("current");
      setHumidity(tempHumidityResponse?.humidity);
      setRoomTemp(tempHumidityResponse?.temperature);

      const co2Response = await fetchCO2("current");
      setCo2(co2Response?.ppm);

      const phResponse = await fetchPH("current");
      setPh(phResponse?.ph);

      const ecResponse = await fetchEC("current");
      setEc(ecResponse?.mScm);

      // setIsLoading(false);
    };
    load();
  }, []);

  const sensorData = {
    co2: co2,
    humidity: humidity,
    ph: ph,
    roomTemp: roomTemp,
    waterTemp: waterTemp,
    ec: ec,
    lightDetected: lightDetected,
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sensor Dashboard
        </Typography>
        <Link
          href="/history/light"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <LightDetector lightDetected={sensorData.lightDetected ?? false} />
        </Link>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 column on mobile
            sm: "repeat(2, 1fr)", // 2 columns on tablet
            md: "repeat(3, 1fr)", // 3 columns on desktop
            lg: "repeat(4, 1fr)", // 4 columns on large screens
          },
          gap: 3,
          width: "100%",
          "& > a": {
            // Style all Link components
            flex: 1,
            minWidth: 250, // Minimum width for each gauge
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Link
          href="/history/room-temperature"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <RoomTempGauge temperature={sensorData.roomTemp} />
        </Link>

        <Link
          href="/history/humidity"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <HumidityGauge humidity={sensorData.humidity} />
        </Link>

        <Link
          href="/history/co2"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <CO2Gauge co2Value={sensorData.co2} />
        </Link>

        <Link
          href="/history/water-temperature"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <WaterTempGauge temperature={sensorData.waterTemp} />
        </Link>

        <Link
          href="/history/ph"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <PhGauge phValue={sensorData.ph} />
        </Link>

        <Link
          href="/history/ec"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <ECGauge ecValue={sensorData.ec} />
        </Link>
      </Box>
    </Box>
  );
}
