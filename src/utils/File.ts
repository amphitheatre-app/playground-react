import { getFilesDetail } from "../server";
import { Files, File } from "../types";
import { event } from "./Event";

type Paths = { path: string; branch: string; currentFilePath: string };
type OtherParams = { pgId: string };

const getFullpath = ({ path, branch, currentFilePath }: Paths) => {
  return `${path}/${currentFilePath}`;
};

export class CustomFile {
  private file: File;
  public branch: string;
  public paths: Paths;
  private pgId: string;

  constructor(files: Files, paths: Paths, { pgId }: OtherParams) {
    const { path, branch, currentFilePath } = paths;
    this.file = files[currentFilePath];
    if (!this.file) {
      new Error("not find file,please check entry name");
    }
    this.branch = branch;
    this.paths = paths;
    this.pgId = pgId;
  }

  public async initCode() {
    if (this.file?.code !== undefined) {
      return;
    }
    const { content } = await getFilesDetail({
      pgId: this.pgId,
      path: this.paths?.currentFilePath,
    });
    this.code = content;
    console.log("getFileDetail");
  }

  public get code(): string | undefined {
    return this.file?.code;
  }

  private set code(val: string) {
    this.file.code = val;
  }
  get language() {
    return this.file?.language;
  }

  get fullpath() {
    return getFullpath(this.paths);
  }

  updateCode(code: string) {
    this.code = code;
    // event.trigger("updateCode", { file: this, newCode: code });
  }
}
