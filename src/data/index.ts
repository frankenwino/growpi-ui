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
