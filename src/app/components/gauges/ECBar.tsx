import { Box, Typography } from "@mui/material";
import React from "react";

interface ECBarProps {
  ecValue: number;
}

export const ECBar: React.FC<ECBarProps> = ({ ecValue }) => {
  const clampedEC = Math.min(5, Math.max(0, ecValue)); // scale max 5 for visual range
  const percent = (clampedEC / 5) * 100;

  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      <Typography variant="h6" mb={1}>
        EC Level: {ecValue.toFixed(2)} mS/cm
      </Typography>

      <Box
        sx={{
          position: "relative",
          height: 20,
          borderRadius: 1,
          background:
            "linear-gradient(to right, red, yellow, green, orange, red)",
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

      <Box
        display="flex"
        justifyContent="space-between"
        mt={0.5}
        px={0.5}
        fontSize="0.75rem"
        color="text.secondary"
      >
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5+</span>
      </Box>
    </Box>
  );
};
