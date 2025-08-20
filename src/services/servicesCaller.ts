import axios, { Method } from "axios";

const SERVICE_URLS: Record<string, string> = {
  users: process.env.USER_SERVICE_URL || "http://localhost:3000/users",
  profiles: process.env.PROFILE_SERVICE_URL || "http://localhost:3000/profiles",
  // library: process.env.LIBRARY_SERVICE_URL || "http://localhost:3000",
};

/**
 * Generic function to call other microservices
 */
export async function callService(
  serviceName: string,
  endpoint: string,
  data: any = {},
  headers: Record<string, string> = {},
  method: Method = "POST"
) {
  const baseUrl = SERVICE_URLS[serviceName];
  if (!baseUrl) throw new Error(`Unknown service: ${serviceName}`);

  try {
    const config = { url: `${baseUrl}${endpoint}`, method, headers, data };
    const response = await axios(config);
    return response.data;
  } catch (err: any) {
    console.error(`❌ Error calling ${serviceName} service:`, err.message);
    throw err;
  }
}
