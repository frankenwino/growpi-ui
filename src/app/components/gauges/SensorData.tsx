"use client";
import { AM2301Reading } from "@/data";
import { Gauge, GaugeContainer, GaugeValueText } from "@mui/x-charts";
import { useEffect, useState } from "react";

export default function SensorData() {
  const [readings, setReadings] = useState<AM2301Reading>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const response = await fetch(
          "http://localhost:5218/api/v1/am2301/latest"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sensor data");
        }
        const data: AM2301Reading = await response.json();
        setReadings(data);
      } catch (err: unknown) {
        if (err && typeof err === "object" && "message" in err) {
          setError((err as { message: string }).message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReadings();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>AM2301 Sensor Reading</h2>
      {readings ? (
        <ul>
          <li>Temperature: {readings.temperature} °C</li>
          <li>Humidity: {readings.humidity} %</li>
          <li>
            Date: {new Date(readings.reading_timestamp_utc).toDateString()}
          </li>
          <li>
            Time: {new Date(readings.reading_timestamp_utc).toTimeString()}
          </li>
        </ul>
      ) : (
        <p>No reading available.</p>
      )}

      <GaugeContainer>
        <GaugeValueText text={"Temperature C"} />

        <Gauge
          value={readings?.temperature ?? 0}
          startAngle={-90}
          endAngle={90}
          innerRadius="80%"
          outerRadius="100%"
        />
      </GaugeContainer>
      <GaugeContainer>
        <GaugeValueText text={"Humidity %"} />
        <Gauge
          value={readings?.humidity ?? 0}
          startAngle={-90}
          endAngle={90}
          innerRadius="80%"
          outerRadius="100%"
        ></Gauge>
      </GaugeContainer>
    </div>
  );
}
