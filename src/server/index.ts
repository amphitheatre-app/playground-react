import { Request } from "../utils/request";

// get file tree
export const getFileTree = ({ pgId }: { pgId: string }) =>
  Request.get(`/v1/playbooks/${pgId}/files/trees/:reference/:path?
  recursive=true | false`);

//  Returns a playbook detail
export const getFilesDetail = ({ pgId }: { pgId: string }) =>
  Request.get(`/v1/playbooks/${pgId}/files/{reference}/{path}`);

export const delatePlaygrond = (pgId: string) =>
  Request.delete(`/v1/playbooks/${pgId}`);

//  start a playbook
export const startPlaygrond = (pgId: string) =>
  Request.delete(`/v1/playbooks/${pgId}/actions/start`);

//  update a playbook
export const updateDetails = (pgId: string) =>
  Request.patch(`/v1/playbooks/${pgId}`);

  
export const createId = () => Request.post(`/v1/playbooks`);
