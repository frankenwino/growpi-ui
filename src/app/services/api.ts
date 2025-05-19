import {
  AM2301Response,
  CO2SensorResponse,
  DS18B20Response,
  ECSensorResponse,
  LM393Response,
  PHSensorResponse,
} from "@/data";

// Configuration
export const DEFAULT_HISTORY_DAYS = 1;

// Helper function for authenticated API calls
async function fetchWithApiKey<T>(url: string): Promise<T> {
  const apiKey = process.env.NEXT_PUBLIC_GROWPIHUB_API_KEY;
  if (!apiKey) {
    throw new Error("API key not found");
  }

  const response = await fetch(url, {
    // credentials: "include",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function fetchWaterTemperature(
  source: "latest" | "current"
): Promise<DS18B20Response | undefined> {
  const otherSource = source === "latest" ? "current" : "latest";
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/${source}`;
    return await fetchWithApiKey<DS18B20Response>(url);
  } catch (error) {
    console.error(`Failed to fetch water temperature from ${source}:`, error);
    try {
      const fallbackUrl = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/${otherSource}`;
      return await fetchWithApiKey<DS18B20Response>(fallbackUrl);
    } catch (fallbackError) {
      console.error(
        `Failed to fetch water temperature from ${otherSource}:`,
        fallbackError
      );
      return undefined;
    }
  }
}

export async function fetchWaterTemperatureHistory(
  days: number = DEFAULT_HISTORY_DAYS
): Promise<DS18B20Response[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/days/${days}`;
    return await fetchWithApiKey<DS18B20Response[]>(url);
  } catch (error) {
    console.error("Failed to fetch water temperature history:", error);
    return undefined;
  }
}

export async function fetchLightDetected(
  source: "latest" | "current"
): Promise<LM393Response | undefined> {
  const otherSource = source === "latest" ? "current" : "latest";
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/${source}`;
    return await fetchWithApiKey<LM393Response>(url);
  } catch (error) {
    console.error(`Failed to fetch light reading from ${source}:`, error);
    try {
      const fallbackUrl = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/${otherSource}`;
      return await fetchWithApiKey<LM393Response>(fallbackUrl);
    } catch (fallbackError) {
      console.error(
        `Failed to fetch light reading from ${otherSource}:`,
        fallbackError
      );
      return undefined;
    }
  }
}

export async function fetchLightHistory(
  days: number = DEFAULT_HISTORY_DAYS
): Promise<LM393Response[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/days/${days}`;
    return await fetchWithApiKey<LM393Response[]>(url);
  } catch (error) {
    console.error("Failed to fetch light history", error);
    return undefined;
  }
}

export async function fetchTemperatureHumidity(
  source: "latest" | "current"
): Promise<AM2301Response | undefined> {
  const otherSource = source === "latest" ? "current" : "latest";
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/AM2301/${source}`;
    return await fetchWithApiKey<AM2301Response>(url);
  } catch (error) {
    console.error(
      `Failed to fetch temperature/humidity from ${source}:`,
      error
    );
    try {
      const fallbackUrl = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/AM2301/${otherSource}`;
      return await fetchWithApiKey<AM2301Response>(fallbackUrl);
    } catch (fallbackError) {
      console.error(
        `Failed to fetch temperature/humidity from ${otherSource}:`,
        fallbackError
      );
      return undefined;
    }
  }
}

export async function fetchTemperatureHumidityHistory(
  days: number = DEFAULT_HISTORY_DAYS
): Promise<AM2301Response[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/AM2301/days/${days}`;
    return await fetchWithApiKey<AM2301Response[]>(url);
  } catch (error) {
    console.error("Failed to fetch temperature and humidity history", error);
    return undefined;
  }
}

export async function fetchCO2(
  source: "latest" | "current"
): Promise<CO2SensorResponse | undefined> {
  const otherSource = source === "latest" ? "current" : "latest";
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/CO2Sensor/${source}`;
    return await fetchWithApiKey<CO2SensorResponse>(url);
  } catch (error) {
    console.error(`Failed to fetch CO2 reading from ${source}:`, error);
    try {
      const fallbackUrl = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/CO2Sensor/${otherSource}`;
      return await fetchWithApiKey<CO2SensorResponse>(fallbackUrl);
    } catch (fallbackError) {
      console.error(
        `Failed to fetch CO2 reading from ${otherSource}:`,
        fallbackError
      );
      return undefined;
    }
  }
}

export async function fetchCO2History(
  days: number = DEFAULT_HISTORY_DAYS
): Promise<CO2SensorResponse[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/CO2Sensor/days/${days}`;
    return await fetchWithApiKey<CO2SensorResponse[]>(url);
  } catch (error) {
    console.error("Failed to fetch CO2 history", error);
    return undefined;
  }
}

export async function fetchPH(
  source: "latest" | "current"
): Promise<PHSensorResponse | undefined> {
  const otherSource = source === "latest" ? "current" : "latest";
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/PHSensor/${source}`;
    return await fetchWithApiKey<PHSensorResponse>(url);
  } catch (error) {
    console.error(`Failed to fetch pH reading from ${source}:`, error);
    try {
      const fallbackUrl = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/PHSensor/${otherSource}`;
      return await fetchWithApiKey<PHSensorResponse>(fallbackUrl);
    } catch (fallbackError) {
      console.error(
        `Failed to fetch pH reading from ${otherSource}:`,
        fallbackError
      );
      return undefined;
    }
  }
}

export async function fetchPHHistory(
  days: number = DEFAULT_HISTORY_DAYS
): Promise<PHSensorResponse[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/PHSensor/days/${days}`;
    return await fetchWithApiKey<PHSensorResponse[]>(url);
  } catch (error) {
    console.error("Failed to fetch pH history", error);
    return undefined;
  }
}

export async function fetchEC(
  source: "latest" | "current"
): Promise<ECSensorResponse | undefined> {
  const otherSource = source === "latest" ? "current" : "latest";
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/ECSensor/${source}`;
    return await fetchWithApiKey<ECSensorResponse>(url);
  } catch (error) {
    console.error(`Failed to fetch EC reading from ${source}:`, error);
    try {
      const fallbackUrl = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/ECSensor/${otherSource}`;
      return await fetchWithApiKey<ECSensorResponse>(fallbackUrl);
    } catch (fallbackError) {
      console.error(
        `Failed to fetch EC reading from ${otherSource}:`,
        fallbackError
      );
      return undefined;
    }
  }
}

export async function fetchECHistory(
  days: number = DEFAULT_HISTORY_DAYS
): Promise<ECSensorResponse[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/ECSensor/days/${days}`;
    return await fetchWithApiKey<ECSensorResponse[]>(url);
  } catch (error) {
    console.error("Failed to fetch EC history", error);
    return undefined;
  }
}
