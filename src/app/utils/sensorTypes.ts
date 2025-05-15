export const SENSOR_TYPES = {
  "room-temperature": {
    label: "Room Temperature",
    unit: "°C",
    apiEndpoint: "/api/temperature/history",
  },
  humidity: {
    label: "Humidity",
    unit: "%",
    apiEndpoint: "/api/humidity/history",
  },
  "water-temperature": {
    label: "Water Temperature",
    unit: "°C",
    apiEndpoint: `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/days/30`,
  },
  co2: {
    label: "CO2",
    unit: "ppm",
    apiEndpoint: "/api/co2/history",
  },
  ph: {
    label: "pH",
    unit: "",
    apiEndpoint: "/api/ph/history",
  },
  ec: {
    label: "EC",
    unit: "mS/cm",
    apiEndpoint: "/api/ec/history",
  },
  light: {
    label: "Light",
    unit: "",
    apiEndpoint: `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/days/30`,
  },
} as const;

export type SensorType = keyof typeof SENSOR_TYPES;

// const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/latest`;

// api / v1 / LM393 / days / 30;

// `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/days/30`;

// L=http://localhost:5218/api/v1
