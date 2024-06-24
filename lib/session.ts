import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface ISessionContent {
  id?: string;
}

export async function getSession() {
  return getIronSession<ISessionContent>(cookies(), {
    cookieName: "delicious-karrot",
    password: process.env.COOKIE_PASSWORD!,
  });
}
