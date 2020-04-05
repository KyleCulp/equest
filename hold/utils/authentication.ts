import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export const setAccessToken = (token: string) => {
  // Typeof object because javascript is stupid
  // Server is returning a null cookie if auth doesn't check out
  // Could be an error, but will fix later.
  // TODO: above ^
  if (typeof token === 'object') return false;
  return cookies.set(ACCESS_TOKEN, token);
};

export const getAccessToken = () => {
  return cookies.get(ACCESS_TOKEN);
};

export const userLogout = () => {
  cookies.remove(ACCESS_TOKEN);
  cookies.remove(REFRESH_TOKEN);
};

export const isTokenExpired = (token: string) => {
  if (!token || token === null) return true;

  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
};
