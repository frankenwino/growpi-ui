// import { Box, Typography } from "@mui/material";

// interface PhBarProps {
//   phValue: number;
// }

// function PhBar({ phValue }: PhBarProps) {
//   // Clamp pH value between 0 and 14
//   const clampedPh = Math.min(14, Math.max(0, phValue));
//   const percent = (clampedPh / 14) * 100;

//   return (
//     <Box sx={{ width: "100%", maxWidth: 400 }}>
//       <Typography variant="h6" mb={1}>
//         pH Level: {clampedPh.toFixed(1)}
//       </Typography>

//       {/* Gradient Bar */}
//       <Box
//         sx={{
//           position: "relative",
//           height: 20,
//           borderRadius: 1,
//           background: "linear-gradient(to right, red, yellowgreen, blue)",
//           boxShadow: 1,
//         }}
//       >
//         {/* Marker */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: `${percent}%`,
//             transform: "translateX(-50%)",
//             width: 2,
//             height: "100%",
//             backgroundColor: "#000",
//           }}
//         />
//       </Box>

//       {/* Legend */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         mt={0.5}
//         px={0.5}
//         fontSize="0.75rem"
//         color="text.secondary"
//       >
//         <span>0 (Acidic)</span>
//         <span>7 (Neutral)</span>
//         <span>14 (Alkaline)</span>
//       </Box>
//     </Box>
//   );
// }
// export { PhBar };

import { Box, LinearProgress, Typography } from "@mui/material";

interface PhBarProps {
  phValue?: number; // Value can be undefined
}

export function PhBar({ phValue }: PhBarProps) {
  // Normalize pH to percentage (0-14 → 0-100)
  const normalizedValue =
    typeof phValue === "number" ? (phValue / 14) * 100 : 0;

  const getColor = (): "error" | "warning" | "success" => {
    if (typeof phValue !== "number") return "error";
    if (phValue < 5.5 || phValue > 8) return "error";
    if (phValue >= 5.5 && phValue <= 6.5) return "success";
    return "warning";
  };

  return (
    <Box textAlign="center">
      <Typography variant="subtitle1" gutterBottom>
        pH Level
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Box width="100%">
          <LinearProgress
            variant="determinate"
            value={normalizedValue}
            color={getColor()}
            sx={{
              height: 10,
              borderRadius: 5,
            }}
          />
        </Box>
        <Typography variant="body1" fontWeight="bold">
          {typeof phValue === "number" ? phValue.toFixed(1) : "--"}
        </Typography>
      </Box>
    </Box>
  );
}
