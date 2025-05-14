import GaugeCard from "./GaugeCard";

interface ECGaugeProps {
  ecValue?: number;
  label?: string;
}

export default function ECGauge({ ecValue, label = "EC Level" }: ECGaugeProps) {
  const getColor = (v?: number) => {
    if (v === undefined) return "#9e9e9e"; // Gray if undefined
    if (v < 0.4 || v > 2.5) return "#d32f2f"; // Red: too low or too high
    if (v >= 1.0 && v <= 2.0) return "#2e7d32"; // Green: ideal for veg/fruit
    return "#f9a825"; // Yellow: borderline (e.g., seedling or edge cases)
  };
  return (
    <GaugeCard
      label={label}
      value={ecValue}
      min={0}
      max={5}
      unit=" mS/cm"
      getColor={getColor}
    />
  );
}
