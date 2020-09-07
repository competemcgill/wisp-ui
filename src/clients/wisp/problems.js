import { api, endpointBuilder } from "./axios";

export const problemsClient = options => {
  const endpoint = endpointBuilder("problems");

  const authHeader =
    options && options.token
      ? {
          Authorization: options.token
        }
      : {};
  const axiosOptions = {
    headers: authHeader
  };

  const get = async () => {
    const { data } = await api.get(endpoint(), axiosOptions);
    return data;
  };

  const del = async problemId => {
    const { data } = await api.delete(endpoint(problemId), axiosOptions);
    return data;
  };

  const create = async problem => {
    const { data } = await api.delete(endpoint(), problem, axiosOptions);
    return data;
  };

  return {
    get,
    del,
    create
  };
};
