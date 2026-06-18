import { onRequestPost } from "./functions/api/send-email.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route form submissions to the send-email function
    if (url.pathname === "/api/send-email" && request.method === "POST") {
      return onRequestPost({ request, env });
    }

    // Serve static assets for all other requests
    return env.ASSETS.fetch(request);
  }
};
