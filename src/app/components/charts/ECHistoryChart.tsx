"use client";

import { fetchECHistory } from "@/app/services/api";
import { ECSensorResponse } from "@/data";
import { tokens } from "@/theme";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import SensorHistoryChart from "./SensorHistoryChart";

export default function ECHistoryChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [readings, setReadings] = useState<ECSensorResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true);
        const data = await fetchECHistory();
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

  if (loading) return <div>Loading EC history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <SensorHistoryChart
      title="EC Level"
      readings={readings}
      valueKey="mScm"
      unit="mS/cm"
      color={colors.blueAccent?.[500] ?? "#00ACC1"} // Fallback to default color if undefined
      yAxisMin={0}
      yAxisMax={5}
    />
  );
}
