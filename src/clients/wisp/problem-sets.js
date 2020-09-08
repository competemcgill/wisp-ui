import { api, endpointBuilder } from "./axios";

export const problemSetsClient = options => {
  const endpoint = endpointBuilder("problemSets");

  const authHeader =
    options && options.token
      ? {
          Authorization: options.token
        }
      : {};
  const axiosOptions = {
    headers: authHeader
  };

  const get = async includeProblems => {
    const params = {
      includeProblems: !!includeProblems
    };

    const { data } = await api.get(endpoint(), {
      ...axiosOptions,
      params
    });

    return data;
  };

  const create = async problemSet => {
    const { data } = await api.post(endpoint(), problemSet, axiosOptions);
    return data;
  };

  const del = async problemSetId => {
    const { data } = await api.delete(endpoint(problemSetId), axiosOptions);
    return data;
  };

  return {
    get,
    create,
    del
  };
};
