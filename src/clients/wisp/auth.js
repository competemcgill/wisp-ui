import { api, endpointBuilder } from "./axios";

export const authClient = () => {
  const endpoint = endpointBuilder("auth");

  const login = async (email, password) => {
    const { data } = await api.post(endpoint("login"), {
      email,
      password
    });
    return data;
  };

  return {
    login
  };
};
