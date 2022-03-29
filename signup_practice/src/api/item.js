import { apiInstance } from ".";

const api = apiInstance();

async function apiGetList(success, fail) {
  await api.get(`/list`).then(success).catch(fail);
}

export { apiGetList };
