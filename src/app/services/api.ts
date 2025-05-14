import { AM2301Response } from "@/data";

// services/api.ts
export async function fetchWaterTemperature(
  source: "latest" | "current"
): Promise<number | undefined> {
  let response;
  try {
    if (source === "latest") {
      const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/latest`;
      console.log(url);

      response = await fetch(url);
      const json = await response.json();

      console.log(json.temperature);

      return json?.temperature; // latest path
    } else {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/current`
      );
      const json = await response.json();
      return json?.temperature; // !latest path
    }
  } catch (error) {
    console.error("Failed to fetch water temperature:", error);
    return undefined;
  }
}

export async function fetchLightDetected(
  source: "latest" | "current"
): Promise<number | undefined> {
  let response;
  try {
    if (source === "latest") {
      const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/latest`;
      console.log(url);

      response = await fetch(url);
      const json = await response.json();

      console.log(json.light_detected);

      return json?.light_detected; // latest path
    } else {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/current`
      );
      const json = await response.json();
      return json?.light_detected; // !latest path
    }
  } catch (error) {
    console.error("Failed to fetch light reading", error);
    return undefined;
  }
}

// type AM2301Response = {
//   temperature: number;
//   humidity: number;
//   reading_timestamp_utc: string;
// };

export async function fetchTemperatureHumidity(
  source: "latest" | "current"
): Promise<AM2301Response | undefined> {
  let response;
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/AM2301/${source}`;
    response = await fetch(url);
    const am2301Response: AM2301Response = await response.json();
    return am2301Response;
  } catch (error) {
    console.error("Failed to fetch temperature/humidity reading", error);
    return undefined;
  }
}
