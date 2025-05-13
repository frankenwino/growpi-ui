import { Box, Typography } from "@mui/material";

interface PhBarProps {
  phValue: number;
}

function PhBar({ phValue }: PhBarProps) {
  // Clamp pH value between 0 and 14
  const clampedPh = Math.min(14, Math.max(0, phValue));
  const percent = (clampedPh / 14) * 100;

  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      <Typography variant="h6" mb={1}>
        pH Level: {clampedPh.toFixed(1)}
      </Typography>

      {/* Gradient Bar */}
      <Box
        sx={{
          position: "relative",
          height: 20,
          borderRadius: 1,
          background: "linear-gradient(to right, red, yellowgreen, blue)",
          boxShadow: 1,
        }}
      >
        {/* Marker */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: `${percent}%`,
            transform: "translateX(-50%)",
            width: 2,
            height: "100%",
            backgroundColor: "#000",
          }}
        />
      </Box>

      {/* Legend */}
      <Box
        display="flex"
        justifyContent="space-between"
        mt={0.5}
        px={0.5}
        fontSize="0.75rem"
        color="text.secondary"
      >
        <span>0 (Acidic)</span>
        <span>7 (Neutral)</span>
        <span>14 (Alkaline)</span>
      </Box>
    </Box>
  );
}
export { PhBar };
