"use client";

import { fetchWaterTemperatureHistory } from "@/app/services/api";
import { DS18B20Response } from "@/data";
import { useEffect, useState } from "react";
import SensorHistoryChart from "./SensorHistoryChart";

export default function WaterTemperatureHistoryChart() {
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
      color="#00ACC1"
      yAxisMin={5}
      yAxisMax={35}
    />
  );
}
