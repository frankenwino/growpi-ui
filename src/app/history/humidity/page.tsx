// "use client";

// import { fetchTemperatureHumidityHistory } from "@/app/services/api";
// import { AM2301Response } from "@/data";
// import { Box, Typography } from "@mui/material";
// import { LineChart } from "@mui/x-charts";
// import { useEffect, useState } from "react";

// export default function HumidityHistory() {
//   const [readings, setReadings] = useState<AM2301Response[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadHistory = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchTemperatureHumidityHistory();
//         if (data) {
//           setReadings(data);
//         } else {
//           setReadings([]);
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to load history");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadHistory();
//   }, []);

//   if (loading) return <div>Loading humidity history...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Prepare data for the chart
//   const chartData = readings.map((reading) => ({
//     timestamp: new Date(reading.reading_timestamp_utc).getTime(),
//     humidity: reading.humidity,
//   }));

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Humidity History
//       </Typography>

//       <Box sx={{ width: "100%", height: 400 }}>
//         <LineChart
//           xAxis={[
//             {
//               data: chartData.map((d) => d.timestamp),
//               scaleType: "time",
//               valueFormatter: (value) => new Date(value).toLocaleString(),
//             },
//           ]}
//           yAxis={[
//             {
//               label: "Humidity (%)",
//             },
//           ]}
//           series={[
//             {
//               data: chartData.map((d) => d.humidity),
//               label: "Humidity",
//               color: "#4caf50", // Using green for humidity
//             },
//           ]}
//           height={300}
//         />
//       </Box>
//     </Box>
//   );
// }

"use client";

import HumidityHistoryChart from "@/app/components/charts/HumidityHistoryChart";

export default function HumidityTemperatureHistory() {
  return (
    <>
      <HumidityHistoryChart />
    </>
  );
}
