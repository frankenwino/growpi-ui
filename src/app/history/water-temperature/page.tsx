// "use client";

// import { fetchWaterTemperatureHistory } from "@/app/services/api";
// import { DS18B20Response } from "@/data";
// import { Box, Typography } from "@mui/material";
// import { LineChart } from "@mui/x-charts";
// import { useEffect, useState } from "react";

// export default function WaterTemperatureHistory() {
//   const [readings, setReadings] = useState<DS18B20Response[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadHistory = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchWaterTemperatureHistory();
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

//   if (loading) return <div>Loading water temperature history...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Prepare data for the chart
//   const chartData = readings.map((reading) => ({
//     timestamp: new Date(reading.reading_timestamp_utc).getTime(),
//     temperature: reading.temperature,
//   }));

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Water Temperature History
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
//               min: 15, // Typical minimum for hydroponic water
//               max: 30, // Typical maximum for hydroponic water
//             },
//           ]}
//           series={[
//             {
//               data: chartData.map((d) => d.temperature),
//               label: "Water Temperature",
//               color: "#00ACC1", // Cyan color for water temperature
//             },
//           ]}
//           height={300}
//         />
//       </Box>
//     </Box>
//   );
// }

// "use client";

// import SensorHistoryChart from "@/app/components/charts/SensorHistoryChart";
// import { fetchWaterTemperatureHistory } from "@/app/services/api";
// import { DS18B20Response } from "@/data";
// import { useEffect, useState } from "react";

// export default function WaterTemperatureHistory() {
//   const [readings, setReadings] = useState<DS18B20Response[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadHistory = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchWaterTemperatureHistory();
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

//   if (loading) return <div>Loading water temperature history...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <SensorHistoryChart
//       title="Water Temperature"
//       readings={readings}
//       valueKey="temperature"
//       unit="°C"
//       color="#00ACC1"
//       yAxisMin={15}
//       yAxisMax={30}
//     />
//   );
// }

"use client";

import WaterTemperatureHistoryChart from "@/app/components/charts/WaterTemperatureHistoryChart";

export default function WaterTemperatureHistory() {
  return (
    <>
      <WaterTemperatureHistoryChart />
    </>
  );
}
