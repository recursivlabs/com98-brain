import { Recursiv } from '@recursiv/sdk';

export const BASE_URL =
  process.env.EXPO_PUBLIC_RECURSIV_API_URL ||
  'https://api.recursiv.io/api/v1';

export const BASE_ORIGIN = BASE_URL.replace(/\/api\/v1$/, '');
// Hardcoded fallbacks for production builds where Coolify env vars aren't set.
// Org/project IDs are public identifiers, not secrets. Local .env still wins
// when present (useful if you fork to point at a different project).
export const ORG_ID =
  process.env.EXPO_PUBLIC_RECURSIV_ORG_ID || '019ddf5b-8b7a-771c-aefc-dcf04e5dcfd1';
export const PROJECT_ID =
  process.env.EXPO_PUBLIC_RECURSIV_PROJECT_ID || '019ddf6f-113d-776e-9ceb-9b3cebe307ea';

export function createAuthedSdk(apiKey: string): Recursiv {
  return new Recursiv({
    apiKey,
    baseUrl: BASE_URL,
    timeout: 120_000,
  });
}

// Anonymous SDK for sign-in (no API key needed)
export const anonSdk = new Recursiv({
  apiKey: 'anonymous',
  baseUrl: BASE_URL,
  timeout: 30_000,
} as any);
