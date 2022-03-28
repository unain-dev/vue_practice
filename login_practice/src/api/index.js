import axios from "axios";
import { MOCK_URL } from "../config/api";

export function apiInstance() {
  const instance = axios.create({
    baseURL: MOCK_URL,
    header: {
      "Content-type": "application/json",
    },
  });

  return instance;
}
