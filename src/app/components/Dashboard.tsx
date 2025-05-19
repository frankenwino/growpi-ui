"use client";

import { tokens } from "@/theme";
import { Box, Link, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [waterTemp, setWaterTemp] = useState<number | undefined>();
  const [lightDetected, setLightDetected] = useState<boolean | undefined>();
  const [humidity, setHumidity] = useState<number | undefined>();
  const [roomTemp, setRoomTemp] = useState<number | undefined>();
  const [co2, setCo2] = useState<number | undefined>();
  const [ph, setPh] = useState<number | undefined>();
  const [ec, setEc] = useState<number | undefined>();

  useEffect(() => {
    const fetchWaterTemperatureData = async () => {
      const response = await fetchWaterTemperature("current");
      setWaterTemp(response?.temperature);
    };
    fetchWaterTemperatureData();
  }, []);

  useEffect(() => {
    const fetchLightData = async () => {
      const response = await fetchLightDetected("current");
      setLightDetected(response?.light_detected);
    };
    fetchLightData();
  }, []);

  useEffect(() => {
    const fetchTempHumidityData = async () => {
      const response = await fetchTemperatureHumidity("current");
      setHumidity(response?.humidity);
      setRoomTemp(response?.temperature);
    };
    fetchTempHumidityData();
  }, []);

  useEffect(() => {
    const fetchCO2Data = async () => {
      const response = await fetchCO2("current");
      setCo2(response?.ppm);
    };
    fetchCO2Data();
  }, []);

  useEffect(() => {
    const fetchPHData = async () => {
      const response = await fetchPH("current");
      setPh(response?.ph);
    };
    fetchPHData();
  }, []);

  useEffect(() => {
    const fetchECData = async () => {
      const response = await fetchEC("current");
      setEc(response?.mScm);
    };
    fetchECData();
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
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: colors.grey?.[100],
          }}
        >
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
            lg: "repeat(3, 1fr)", // 4 columns on large screens
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
