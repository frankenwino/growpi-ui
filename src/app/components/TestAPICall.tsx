"use client";

// export default function TestAPICAll() {
//   const apiUrl = process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL;
//   const latestUrl = `${apiUrl}/LM393/latest`;

//   console.log(latestUrl);

//   useEffect(() => {
//     fetch(latestUrl)
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }, []);

//   return <div>Different ways to fetch Data</div>;
// }

export default function TestAPICAll() {
  const apiUrl = process.env.NEXT_PUBLIC_GROWPIHUB_API_BASE_URL;
  const latestUrl = `${apiUrl}/AM2301/latest`;

  async function getData() {
    const url = latestUrl;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  getData();

  return <div>Test API Call Component</div>;
}
