import Cookies from "universal-cookie";
const cookie = new Cookies();
export const saveDataToSession = (key, value) => {
  cookie.set(key, value);
  sessionStorage.setItem(key, value);
};

export const saveDataLocally = (key, value) => {
  cookie.set(key, value);
  localStorage.setItem(key, value);
};
export const removeDataFromSession = (key) => {
  cookie.remove(key);
  sessionStorage.removeItem(key);
};

export const removeDataLocally = (key) => {
  localStorage.removeItem(key);
};
