import { apiInstance } from ".";

const api = apiInstance();

export async function apiSignup(param, success, fail) {
  await api.post(`/signup`, param).then(success).catch(fail);
}
