import axios from "axios";

const url = process.env.VUE_APP_WISP_API_URL || "https://api.wisp.training";
export const api = axios.create({
  baseURL: url
});

export const endpointBuilder = base => {
  return extension => {
    return `/${base}${extension ? `${extension}` : ""}`;
  };
};
