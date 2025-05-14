"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function CurrentDateTime() {
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
    <Card sx={{ p: 2, textAlign: "center" }}>
      <CardContent>
        <Typography variant="body1">{formattedDate || "\u00A0"}</Typography>
        <Typography variant="h4" fontWeight="bold">
          {formattedTime || "\u00A0"}
        </Typography>
      </CardContent>
    </Card>
  );
}
