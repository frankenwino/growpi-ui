import { Box, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";

interface GaugeCardProps {
  label: string;
  value?: number;
  min?: number;
  max?: number;
  unit?: string;
  getColor?: (value?: number) => string;
}

export default function GaugeCard({
  label,
  value,
  min = 0,
  max = 100,
  unit = "",
  getColor,
}: GaugeCardProps) {
  const safeValue = typeof value === "number" ? value : 0;
  const clamped = Math.max(min, Math.min(safeValue, max));
  const normalizedValue = ((clamped - min) / (max - min)) * 100;
  const color = getColor ? getColor(clamped) : "#1976d2";

  return (
    <Box textAlign="center">
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <Box position="relative" display="inline-flex">
        <Gauge
          value={normalizedValue}
          startAngle={-90}
          endAngle={90}
          innerRadius="70%"
          outerRadius="100%"
          sx={{
            "& .MuiGauge-valueArc": {
              fill: color,
            },
            // "& .MuiGauge-needle": {
            //   stroke: color,
            // },
            "& .MuiGauge-valueText": {
              display: "none",
            },
          }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography variant="h6">
            {value !== undefined ? `${value.toFixed(1)}${unit}` : "--"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
