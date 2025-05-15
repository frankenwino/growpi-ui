"use client";

import { fetchTemperatureHumidityHistory } from "@/app/services/api";
import { AM2301Response } from "@/data";
import { useEffect, useState } from "react";
import SensorHistoryChart from "./SensorHistoryChart";

export default function RoomTemperatureHistoryChart() {
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

  if (loading) return <div>Loading room temperature history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <SensorHistoryChart
      title="Room Temperature"
      readings={readings}
      valueKey="temperature"
      unit="°C"
      color="#00ACC1"
      yAxisMin={5}
      yAxisMax={50}
    />
  );
}
