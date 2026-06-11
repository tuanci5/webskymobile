import { cookies } from "next/headers";
import { createHmac, randomBytes, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "skymobile_admin";

function getSecret() {
  return process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD || "skymobile-dev-secret";
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createSessionToken(username: string) {
  const payload = JSON.stringify({ username, nonce: randomBytes(12).toString("hex"), ts: Date.now() });
  const body = Buffer.from(payload).toString("base64url");
  return `${body}.${sign(body)}`;
}

export function verifySessionToken(token?: string) {
  if (!token || !token.includes(".")) return null;
  const [body, signature] = token.split(".");
  const expected = sign(body);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (!payload?.username || !payload?.ts) return null;
    if (Date.now() - Number(payload.ts) > 1000 * 60 * 60 * 24 * 7) return null;
    return payload as { username: string; ts: number; nonce: string };
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(ADMIN_COOKIE)?.value);
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) return null;
  return session;
}

export function isValidAdminLogin(username: string, password: string) {
  return username === (process.env.ADMIN_USERNAME || "admin") && password === process.env.ADMIN_PASSWORD;
}
