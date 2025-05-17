// "use client";

// import { fetchTemperatureHumidityHistory } from "@/app/services/api";
// import { AM2301Response } from "@/data";
// import { Box, Typography } from "@mui/material";
// import { LineChart } from "@mui/x-charts";
// import { useEffect, useState } from "react";

// export default function RoomTemperatureHistory() {
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

//   if (loading) return <div>Loading temperature history...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Prepare data for the chart
//   const chartData = readings.map((reading) => ({
//     timestamp: new Date(reading.reading_timestamp_utc).getTime(),
//     temperature: reading.temperature,
//   }));

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Room Temperature History
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
//               label: "Temperature (°C)",
//             },
//           ]}
//           series={[
//             {
//               data: chartData.map((d) => d.temperature),
//               label: "Temperature",
//               color: "#2196f3",
//             },
//           ]}
//           height={300}
//         />
//       </Box>
//     </Box>
//   );
// }

"use client";

import PHHistoryChart from "@/app/components/charts/PHHistoryChart";

export default function PHHistory() {
  return (
    <>
      <PHHistoryChart />
    </>
  );
}
