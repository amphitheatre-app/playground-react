import { deleteRequest, getRequest, patchRequest, postRequest } from "../utils/request";

export const getDetails = (id: string) => getRequest(`/v1/playbooks/${id}`);
export const delatePlaygronds = (id: string) =>
  deleteRequest(`/v1/playbooks/${id}`);
export const updateDetails = (id: string) =>
  patchRequest(`/v1/playbooks/${id}`);
export const createId = () => postRequest(`/v1/playbooks`);
