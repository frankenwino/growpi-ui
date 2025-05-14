import GaugeCard from "./GaugeCard";

interface TemperatureGaugeProps {
  temperature?: number;
  label?: string;
}

export default function WaterTempGauge({
  temperature,
  label = "Water Temperature",
}: TemperatureGaugeProps) {
  const getColor = () => {
    if (typeof temperature !== "number") return "#9e9e9e"; // Gray for undefined
    if (temperature < 15 || temperature > 30) return "#d32f2f"; // Red: out of range
    if (temperature >= 18 && temperature <= 24) return "#2e7d32"; // Green: optimal
    return "#f9a825"; // Yellow: borderline
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
