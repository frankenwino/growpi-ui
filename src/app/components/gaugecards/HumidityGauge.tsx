import GaugeCard from "./GaugeCard";

interface HumidityGaugeProps {
  humidity?: number;
  label?: string;
}

export default function HumidityGauge({
  humidity,
  label = "Humidity",
}: HumidityGaugeProps) {
  const getColor = (v?: number) => {
    if (v === undefined) return "#9e9e9e";
    if (v < 30 || v > 70) return "#d32f2f";
    if (v >= 40 && v <= 60) return "#2e7d32";
    return "#f9a825";
  };

  return (
    <GaugeCard
      label={label}
      value={humidity}
      min={0}
      max={100}
      unit="%"
      getColor={getColor}
    />
  );
}
