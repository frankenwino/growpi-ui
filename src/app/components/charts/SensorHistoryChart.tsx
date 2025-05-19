import { tokens } from "@/theme";
import { Box, Typography, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";

interface SensorReading {
  reading_timestamp_utc: string;
  [key: string]: unknown;
}

interface SensorHistoryChartProps<T extends SensorReading> {
  title: string;
  readings: T[];
  valueKey: keyof T;
  unit: string;
  color?: string;
  yAxisMin?: number;
  yAxisMax?: number;
}

export default function SensorHistoryChart<T extends SensorReading>({
  title,
  readings,
  valueKey,
  unit,
  color = "#2196f3",
  yAxisMin,
  yAxisMax,
}: SensorHistoryChartProps<T>) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const chartData = readings.map((reading) => ({
    timestamp: new Date(reading.reading_timestamp_utc).getTime(),
    value: reading[valueKey],
  }));

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: colors.grey?.[100] }}>
        {title} History
      </Typography>

      <Box sx={{ width: "100%", height: 400 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: colors.grey?.[100], mb: 1 }}
        >
          {readings.length > 0
            ? `${new Date(readings[0].reading_timestamp_utc).toLocaleDateString(
                undefined,
                {
                  day: "2-digit",
                  month: "2-digit",
                }
              )} - ${new Date(
                readings[readings.length - 1].reading_timestamp_utc
              ).toLocaleDateString(undefined, {
                day: "2-digit",
                month: "2-digit",
              })}`
            : ""}
        </Typography>
        <LineChart
          xAxis={[
            {
              data: chartData.map((d) => d.timestamp),
              scaleType: "time",
              valueFormatter: (value) => {
                const date = new Date(value);
                // const mm = String(date.getMonth() + 1).padStart(2, "0");
                // const dd = String(date.getDate()).padStart(2, "0");
                const hh = String(date.getHours()).padStart(2, "0");
                const min = String(date.getMinutes()).padStart(2, "0");
                return `${hh}:${min}`;
              },
              tickLabelStyle: {
                fill: colors.grey?.[100],
              },
            },
          ]}
          yAxis={[
            {
              label: `${title} (${unit})`,
              min: yAxisMin,
              max: yAxisMax,
              tickLabelStyle: {
                fill: colors.grey?.[100],
              },
              labelStyle: {
                fill: colors.grey?.[100],
              },
            },
          ]}
          series={[
            {
              data: chartData.map((d) => {
                const v = d.value;
                return typeof v === "number"
                  ? v
                  : v === null || v === undefined
                  ? null
                  : Number(v);
              }),
              // label: title,
              color: color,
            },
          ]}
          height={300}
          sx={{
            backgroundColor: "transparent",
            "& .MuiChartsAxis-line": {
              stroke: colors.grey?.[100],
            },
            "& .MuiChartsAxis-tick": {
              stroke: colors.grey?.[100],
            },
          }}
        />
      </Box>
    </Box>
  );
}
