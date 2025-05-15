"use client";

import { fetchLightHistory } from "@/app/services/api";
import { LM393Response } from "@/data";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function LightHistory() {
  const [readings, setReadings] = useState<LM393Response[] | undefined>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     const loadHistory = async () => {
  //       try {
  //         setLoading(true);
  //         const data = await fetchLightDetected("history");
  //         setReadings(Array.isArray(data) ? data : [data]);
  //       } catch (err) {
  //         setError(err instanceof Error ? err.message : 'Failed to load history');
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     loadHistory();
  //   }, []);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const lightDetectedResponse = await fetchLightHistory();
        setReadings(
          lightDetectedResponse === undefined
            ? undefined
            : Array.isArray(lightDetectedResponse)
            ? lightDetectedResponse
            : [lightDetectedResponse]
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load history");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div>Loading light sensor history...</div>;
  if (error) return <div>Error: {error}</div>;

  // Determine the date range if readings exist
  let startDate: string | null = null;
  let endDate: string | null = null;
  if (readings && readings.length > 0) {
    const sorted = [...readings].sort(
      (a, b) =>
        new Date(a.reading_timestamp_utc).getTime() -
        new Date(b.reading_timestamp_utc).getTime()
    );
    startDate = new Date(sorted[0].reading_timestamp_utc).toLocaleString();
    endDate = new Date(
      sorted[sorted.length - 1].reading_timestamp_utc
    ).toLocaleString();
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Light Sensor History
      </Typography>
      {/* Simple visualization: show a bar for each reading, colored by on/off */}
      {readings && readings.length > 0 ? (
        <Box>
          <Typography variant="h6" gutterBottom>
            Light Readings |
            {startDate && endDate && (
              <>
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{ ml: 2, fontWeight: 400 }}
                >
                  {startDate} - {endDate}
                </Typography>
              </>
            )}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end", mt: 2 }}>
            {readings.map((reading, idx) => (
              <Box
                key={idx}
                sx={{
                  minWidth: 10,
                  height: 40,
                  backgroundColor: reading.light_detected
                    ? "#4caf50"
                    : "#9e9e9e",
                  borderRadius: 1,
                  transition: "background 0.3s",
                  flex: "0 0 auto",
                }}
                title={`${new Date(
                  reading.reading_timestamp_utc
                ).toLocaleString()} - ${reading.light_detected ? "ON" : "OFF"}`}
              />
            ))}
          </Box>
          <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
            Green = ON, Gray = OFF
          </Typography>
        </Box>
      ) : (
        <Typography>No light sensor history available.</Typography>
      )}
    </Box>
  );
}
