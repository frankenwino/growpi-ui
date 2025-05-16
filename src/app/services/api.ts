import { AM2301Response, DS18B20Response, LM393Response } from "@/data";

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
): Promise<number | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/${source}`;
    const json = await fetchWithApiKey<{ temperature: number }>(url);
    return json.temperature;
  } catch (error) {
    console.error("Failed to fetch water temperature:", error);
    return undefined;
  }
}

export async function fetchWaterTemperatureHistory(
  days: number = 30
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
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/${source}`;
    return await fetchWithApiKey<LM393Response>(url);
  } catch (error) {
    console.error("Failed to fetch light reading", error);
    return undefined;
  }
}

export async function fetchLightHistory(
  days: number = 30
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
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/AM2301/${source}`;
    return await fetchWithApiKey<AM2301Response>(url);
  } catch (error) {
    console.error("Failed to fetch temperature/humidity reading", error);
    return undefined;
  }
}

export async function fetchTemperatureHumidityHistory(
  days: number = 30
): Promise<AM2301Response[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/AM2301/days/${days}`;
    return await fetchWithApiKey<AM2301Response[]>(url);
  } catch (error) {
    console.error("Failed to fetch temperature and humidity history", error);
    return undefined;
  }
}
