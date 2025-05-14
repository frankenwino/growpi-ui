import GaugeCard from "./GaugeCard";

interface TemperatureGaugeProps {
  temperature?: number;
  label?: string;
}

export default function RoomTempGauge({
  temperature,
  label = "Room Temperature",
}: TemperatureGaugeProps) {
  const getColor = () => {
    if (typeof temperature !== "number") return "#9e9e9e"; // Gray for missing
    if (temperature < 16 || temperature > 30) return "#d32f2f"; // Red: out of range
    if (temperature >= 20 && temperature <= 26) return "#2e7d32"; // Green: optimal
    return "#f9a825"; // Yellow: caution
  };

  return (
    <GaugeCard
      label={label}
      value={temperature}
      min={-10}
      max={50}
      unit="°C"
      getColor={getColor}
    />
  );
}
