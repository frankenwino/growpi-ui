import GaugeCard from "./GaugeCard";

interface CO2GaugeProps {
  co2Value?: number;
  label?: string;
}

export default function CO2Gauge({
  co2Value,
  label = "CO₂ Level",
}: CO2GaugeProps) {
  const getColor = (v?: number) => {
    if (v === undefined) return "#9e9e9e";
    if (v <= 1000) return "#4caf50";
    if (v <= 2000) return "#ffeb3b";
    if (v <= 4000) return "#ff9800";
    return "#f44336";
  };

  return (
    <GaugeCard
      label={label}
      value={co2Value}
      min={0}
      max={5000}
      unit=" ppm"
      getColor={getColor}
    />
  );
}
