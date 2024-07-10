import db from "@/lib/db";
import { signIn } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import {
  getGithubAccessToken,
  getGithubUserEmail,
  getGithubUserProfile,
} from "./actions";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }

  const { error, access_token } = await getGithubAccessToken(code);
  if (error) {
    return new Response(null, {
      status: 400,
    });
  }

  const [{ id, avatar_url, login }, email] = await Promise.all([
    getGithubUserProfile(access_token),
    getGithubUserEmail(access_token),
  ]);

  const user = await db.user.findUnique({
    where: {
      github_id: id.toString(),
    },
    select: {
      id: true,
    },
  });

  if (user) {
    await signIn(user.id);
    return redirect("/profile");
  }

  const existsEmail = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  if (existsEmail) {
    return new Response(null, {
      status: 400,
    });
  }

  const existsUserName = await db.user.findUnique({
    where: {
      username: login,
    },
    select: {
      id: true,
    },
  });

  const username = existsUserName ? `${login}-gh` : login;
  const newUser = await db.user.create({
    data: {
      github_id: id.toString(),
      avatar: avatar_url,
      username: username,
      email,
    },
    select: {
      id: true,
    },
  });

  await signIn(newUser.id);
  return redirect("/profile");
}
