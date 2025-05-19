"use client";

import { fetchTemperatureHumidityHistory } from "@/app/services/api";
import { AM2301Response } from "@/data";
import { tokens } from "@/theme";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import SensorHistoryChart from "./SensorHistoryChart";

export default function HumidityHistoryChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [readings, setReadings] = useState<AM2301Response[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true);
        const data = await fetchTemperatureHumidityHistory();
        if (data) {
          setReadings(data);
        } else {
          setReadings([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load history");
      } finally {
        setLoading(false);
      }
    };
    loadHistory();
  }, []);

  if (loading) return <div>Loading humidity history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <SensorHistoryChart
      title="Humidity"
      readings={readings}
      valueKey="humidity"
      unit="%"
      color={colors.blueAccent?.[400] ?? "#4caf50"} // Fallback to "#4caf50" if undefined
      yAxisMin={0}
      yAxisMax={100}
    />
  );
}
