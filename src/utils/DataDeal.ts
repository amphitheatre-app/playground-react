import { getFileLanguage } from "../constant/languages";
import { File, Files } from "../types";
export const filesTreeDataDeail = (data: File[]) => {
  const files = {} as Files;

  data?.forEach((item) => {
    files[item.path] = {
      path: item.path,
      sha: item.sha,
      language: getFileLanguage(item.path),
    };
  });
  return files;
};
