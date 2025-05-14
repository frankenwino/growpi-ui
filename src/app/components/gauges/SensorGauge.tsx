import { Box, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";

interface SensorGaugeProps {
  label: string;
  value: number;
  unit?: string;
  color?: string;
}

export function SensorGauge({
  label,
  value,
  unit = "",
  color = "#1976d2",
}: SensorGaugeProps) {
  return (
    <Box textAlign="center">
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <Box position="relative" display="inline-flex">
        <Gauge
          value={value}
          startAngle={-90}
          endAngle={90}
          innerRadius="70%"
          outerRadius="100%"
          sx={{ color }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography variant="h6">
            {value}
            {unit}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
