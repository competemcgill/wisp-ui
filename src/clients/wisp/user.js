import { api, endpointBuilder } from "./axios";

export const userClient = options => {
  const endpoint = endpointBuilder("user");

  const authHeader =
    options && options.token
      ? {
          Authorization: options.token
        }
      : {};
  const axiosOptions = {
    headers: authHeader
  };

  const getData = async userId => {
    const { data } = await api.get(endpoint(userId), options);
    return data;
  };

  const create = async user => {
    const { data } = await api.post(endpoint(), user);
    return data;
  };

  const del = async userId => {
    const { data } = await api.delete(endpoint(userId), axiosOptions);
    return data;
  };

  const update = async (userId, user) => {
    const { data } = await api.put(endpoint(userId), user, axiosOptions);
    return data;
  };

  const trackProblemSet = async (userId, problemSetId) => {
    const { data } = await api.patch(
      endpoint(`users/${userId}/problemSets`),
      {
        problemSetId
      },
      options
    );
    return data;
  };

  return {
    getData,
    create,
    del,
    update,
    trackProblemSet
  };
};
