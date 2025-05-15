import { AM2301Response, DS18B20Response, LM393Response } from "@/data";

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

export async function fetchWaterTemperatureHistory(
  days: number = 30
): Promise<DS18B20Response[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/DS18B20/days/${days}`;
    const response = await fetch(url);
    const ds18b20History: DS18B20Response[] = await response.json();
    return ds18b20History;
  } catch (error) {
    console.error("Failed to fetch light history", error);
    return undefined;
  }
}

// export async function fetchLightDetected(
//   source: "latest" | "current"
// ): Promise<number | undefined> {
//   let response;
//   try {
//     if (source === "latest") {
//       const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/latest`;
//       console.log(url);

//       response = await fetch(url);
//       const json = await response.json();

//       console.log(json.light_detected);

//       return json?.light_detected; // latest path
//     } else {
//       response = await fetch(
//         `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/current`
//       );
//       const json = await response.json();
//       return json?.light_detected; // !latest path
//     }
//   } catch (error) {
//     console.error("Failed to fetch light reading", error);
//     return undefined;
//   }
// }

// export async function fetchLightDetected(
//   source: "latest" | "current"
// ): Promise<LM393Response | undefined> {
//   let response;
//   try {
//     if (source === "latest") {
//       const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/latest`;
//       console.log(url);

//       response = await fetch(url);
//       const lm393Response: LM393Response = await response.json();

//       console.log(lm393Response);

//       return lm393Response; // latest path
//     } else {
//       response = await fetch(
//         `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/current`
//       );
//       const lm393Response: LM393Response = await response.json();
//       return lm393Response; // !latest path
//     }
//   } catch (error) {
//     console.error("Failed to fetch light reading", error);
//     return undefined;
//   }
// }

export async function fetchLightDetected(
  source: "latest" | "current"
): Promise<LM393Response | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/LM393/${source}`;
    const response = await fetch(url);
    const lm393Response: LM393Response = await response.json();
    return lm393Response;
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
    const response = await fetch(url);
    const lm393History: LM393Response[] = await response.json();
    return lm393History;
  } catch (error) {
    console.error("Failed to fetch light history", error);
    return undefined;
  }
}

// /LM393/days/30
// LM393Response;

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

export async function fetchTemperatureHumidityHistory(
  days: number = 30
): Promise<AM2301Response[] | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL}/AM2301/days/${days}`;
    const response = await fetch(url);
    const am2301History: AM2301Response[] = await response.json();
    return am2301History;
  } catch (error) {
    console.error("Failed to fetch temperature and humidity history", error);
    return undefined;
  }
}
