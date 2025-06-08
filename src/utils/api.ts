import type { Skip } from "../types/skip";

export const fetchSkips = async (postcode: string): Promise<Skip[]> => {
    const url = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch skips");
    const data = await res.json();
    return data;
  };
  