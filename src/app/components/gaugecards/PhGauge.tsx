import GaugeCard from "./GaugeCard";

interface PhGaugeProps {
  phValue?: number;
  label?: string;
}

export default function PhGauge({ phValue, label = "pH Level" }: PhGaugeProps) {
  const getColor = (v?: number) => {
    if (v === undefined) return "#9e9e9e";
    if (v < 5.5 || v > 8) return "#d32f2f";
    if (v >= 5.5 && v <= 6.5) return "#2e7d32";
    return "#f9a825";
  };

  return (
    <GaugeCard
      label={label}
      value={phValue}
      min={0}
      max={14}
      unit=" pH"
      getColor={getColor}
    />
  );
}
