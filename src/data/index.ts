interface BaseSensorReading {
  reading_timestamp_utc: string; // ISO 8601 format, e.g., "2025-05-11T12:13:47"
}

export interface AM2301Reading extends BaseSensorReading {
  temperature: number;
  humidity: number;
}

export interface AM2302Reading extends BaseSensorReading {
  temperature: number;
  humidity: number;
}

export interface DS18B20Reading extends BaseSensorReading {
  temperature: number;
}
export interface LM393Reading extends BaseSensorReading {
  light_detected: boolean;
}

export type AM2301Response = {
  sensor: string;
  temperature: number;
  humidity: number;
  reading_timestamp_utc: string;
};

export type AM2302Response = {
  sensor: string;
  temperature: number;
  humidity: number;
  reading_timestamp_utc: string;
};

export type DS18B20Response = {
  sensor: string;
  temperature: number;
  reading_timestamp_utc: string;
};

export type LM393Response = {
  sensor: string;
  light_detected: boolean;
  reading_timestamp_utc: string;
};

export type CO2SensorResponse = {
  sensor: string;
  ppm: number;
  reading_timestamp_utc: string;
};

export type PHSensorResponse = {
  sensor: string;
  ph: number;
  reading_timestamp_utc: string;
};

export type ECSensorResponse = {
  sensor: string;
  mScm: number;
  reading_timestamp_utc: string;
};
