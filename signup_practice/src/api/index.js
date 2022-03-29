import axios from "axios";

export function apiInstance() {
  const instance = axios.create({
    baseURL: `https://70a87036-4459-4eba-a6c8-42af2505eaeb.mock.pstmn.io/vue/test`,
    header: {
      "Content-Type": "application/json",
    },
  });
  return instance;
}
