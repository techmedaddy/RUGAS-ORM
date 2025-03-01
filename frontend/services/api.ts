const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export const fetcher = async (endpoint: string, options = {}) => {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`, options);
  if (!res.ok) throw new Error("API Error");
  return res.json();
};
