interface IGithubAccessTokenResponse {
  access_token: string;
  error?: string;
}

interface IGithubUserProfile {
  id: number;
  avatar_url: string;
  login: string;
}

interface IGithubUserEmail {
  email: string;
  primary: boolean;
  verified: boolean;
}

export async function getGithubAccessToken(
  code: string,
): Promise<IGithubAccessTokenResponse> {
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();
  const accessTokenUrl = `https://github.com/login/oauth/access_token?${accessTokenParams}`;

  const accessTokenResponse = await fetch(accessTokenUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  return await accessTokenResponse.json();
}

export async function getGithubUserProfile(
  access_token: string,
): Promise<IGithubUserProfile> {
  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-cache",
  });
  return await userProfileResponse.json();
}

export async function getGithubUserEmail(
  access_token: string,
): Promise<string> {
  const userEmailResponse = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-cache",
  });
  const resposne = await userEmailResponse.json();
  const foundData = resposne.find(
    (email: IGithubUserEmail) => email.primary && email.verified,
  );
  return foundData.email;
}
