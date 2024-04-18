import Cookies from "js-cookie";

type UserDataType = {
  email: string;
  password: string;
  username?: string;
};

const SIGNUP_URL = "https://skypro-music-api.skyeng.tech/user/signup/";
const LOGIN_URL = "https://skypro-music-api.skyeng.tech/user/login/";
const TOKEN_URL = "https://skypro-music-api.skyeng.tech/user/token/";
const REFRESH_URL = "https://skypro-music-api.skyeng.tech/user/token/refresh/";

export async function getSignup({ email, password, username }: UserDataType) {
  console.log(email, password, username);
  const response = await fetch(SIGNUP_URL, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }
  return responseData;
}

export async function getLogin({ email, password }: UserDataType) {
  console.log(email, password);
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }
  Cookies.set("user", JSON.stringify(responseData));
  console.log(JSON.parse(Cookies.get("user") || "").username);
  return responseData;
}

export async function getToken({ email, password }: UserDataType) {
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }
  Cookies.set("tokens", JSON.stringify(responseData));
  return responseData;
}

export async function getRefresh(refreshToken: string) {
  const response = await fetch(REFRESH_URL, {
    method: "POST",
    body: JSON.stringify({
      refresh: refreshToken,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}
