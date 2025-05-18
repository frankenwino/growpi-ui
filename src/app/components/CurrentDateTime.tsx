"use client";
import { tokens } from "@/theme";
import { Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export default function CurrentDateTime() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate =
    now &&
    now.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formattedTime = now && now.toLocaleTimeString();

  return (
    <Card
      sx={{
        p: 2,
        textAlign: "center",
        bgcolor: "transparent", // Remove background color
        boxShadow: "none",
        borderRadius: "3px",
        transition: theme.transitions.create(["color"], {
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            color: colors.grey?.[100],
            opacity: 0.9,
          }}
        >
          {formattedDate || "\u00A0"}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: colors.grey?.[100],
          }}
        >
          {formattedTime || "\u00A0"}
        </Typography>
      </CardContent>
    </Card>
  );
}
