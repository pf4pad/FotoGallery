import { API_URL_AUTH } from "./const.js";

const login = () => {
  const url = new URL(API_URL_AUTH)
}

export const authorization = (btn) => {
  btn.addEventListener('click', login);
}