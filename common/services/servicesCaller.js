const axios = require("axios");

const SERVICE_URLS = {
  user: process.env.USER_SERVICE_URL || "http://localhost:4001",
  profile: process.env.PROFILE_SERVICE_URL || "http://localhost:4002",
//   library: process.env.LIBRARY_SERVICE_URL || "http://localhost:4003",
};


/**
 * Generic function to call other microservices
 * @param {string} serviceName - service identifier ("profile", "library", etc.)
 * @param {string} endpoint - API path (e.g. "/profiles/create-profile")
 * @param {object} data - body for POST/PUT
 * @param {object} headers - optional headers (JWT, internal secret, etc.)
 * @param {string} method - HTTP method (default: POST)
 */

async function callService(serviceName, endpoint, data = {}, headers = {}, method = "POST") {
  const baseUrl = SERVICE_URLS[serviceName];
  if (!baseUrl) throw new Error(`Unknown service: ${serviceName}`);

  try {
    const config = {
      url: `${baseUrl}${endpoint}`,
      method,
      headers,
      data,
    };

    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(`❌ Error calling ${serviceName} service:`, err.message);
    throw err;
  }
}

module.exports = callService;