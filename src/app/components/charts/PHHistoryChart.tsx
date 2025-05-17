"use client";

import { fetchPHHistory } from "@/app/services/api";
import { PHSensorResponse } from "@/data";
import { useEffect, useState } from "react";
import SensorHistoryChart from "./SensorHistoryChart";

export default function PHHistoryChart() {
  const [readings, setReadings] = useState<PHSensorResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true);
        const data = await fetchPHHistory();
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

  if (loading) return <div>Loading PH history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <SensorHistoryChart
      title="PH Level"
      readings={readings}
      valueKey="ph"
      unit="pH"
      color="#00ACC1"
      yAxisMin={0}
      yAxisMax={14}
    />
  );
}
