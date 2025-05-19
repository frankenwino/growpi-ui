"use client";

import { fetchWaterTemperatureHistory } from "@/app/services/api";
import { DS18B20Response } from "@/data";
import { tokens } from "@/theme";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import SensorHistoryChart from "./SensorHistoryChart";

export default function WaterTemperatureHistoryChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [readings, setReadings] = useState<DS18B20Response[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true);
        const data = await fetchWaterTemperatureHistory();
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

  if (loading) return <div>Loading water temperature history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <SensorHistoryChart
      title="Water Temperature"
      readings={readings}
      valueKey="temperature"
      unit="°C"
      color={colors.blueAccent?.[400] ?? "#00ACC1"} // Fallback to default color if undefined
      yAxisMin={5}
      yAxisMax={35}
    />
  );
}
