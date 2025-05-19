"use client";

import { fetchCO2History } from "@/app/services/api";
import { CO2SensorResponse } from "@/data";
import { tokens } from "@/theme";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import SensorHistoryChart from "./SensorHistoryChart";

export default function CO2HistoryChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [readings, setReadings] = useState<CO2SensorResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true);
        const data = await fetchCO2History();
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

  if (loading) return <div>Loading CO₂ history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <SensorHistoryChart
      title="CO₂ Level"
      readings={readings}
      valueKey="ppm"
      unit="ppm"
      color={colors.greenAccent?.[600] ?? "#00ACC1"} // Fallback to default color if undefined
      yAxisMin={0}
      yAxisMax={6000}
    />
  );
}
