import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

function handler(req: Request): Response {
  return new Response("Hello world");
}

console.log("Listening on http://localhost:8000");
await serve(handler);
