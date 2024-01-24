import { filesTreeDataDeail } from "../utils/DataDeal";
import { Request } from "../utils/request";
import { CreatPlaygroundProps } from "./type";

// get file tree
export const getFileTree = async ({ pgId }: { pgId: string }) => {
  const { tree } = await Request.get(`/v1/playbooks/${pgId}/tree`);
  return {
    tree: filesTreeDataDeail(tree),
  };
};

// get file tree
export const creatPlayground = (params: CreatPlaygroundProps) =>
  Request.post(`/v1/playbooks`, params);

//  Returns a playbook detail
export const getFilesDetail = async ({
  pgId,
  path,
}: {
  pgId: string;
  path: string;
}) => {
  const { data } = await Request.get(`/v1/playbooks/${pgId}/files/${path}`);
  const content = String.fromCharCode(...data);
  return { content };
};

//  update a playbook
export const updateDetails = ({
  pgId,
  path,
  content,
}: {
  pgId: string;
  path: string;
  content: string;
}) => Request.post(`/v1/playbooks/${pgId}/files/${path}`, { content });



