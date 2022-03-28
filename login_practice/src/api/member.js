import { apiInstance } from ".";

const api = apiInstance();

export async function signup(param, success, fail) {
  api.post(`/signup`, param).then(success).catch(fail);
}
