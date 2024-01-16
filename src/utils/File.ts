import { Files, File } from "../types";
import { event } from "./Event";

type Paths = { path: string; branch: string; currentFilePath: string };

const getFullpath = ({ path, branch, currentFilePath }: Paths) => {
  return `${path}/${currentFilePath}`;
};

export class CustomFile {
  private file: File;
  private branch: string;
  private paths: Paths;

  constructor(files: Files, paths: Paths) {
    const { path, branch, currentFilePath } = paths;
    this.file = files[currentFilePath];
    this.branch = branch;
    this.paths = paths;
  }

  public async initCode() {
    if (this.file.code !== undefined) {
      return;
    }
    this.file.code = "getFileDetail";
    console.log("getFileDetail");
  }

  public get code(): string | undefined {
    return this.file.code;
  }

  private set code(val: string) {
    this.file.code = val;
  }
  get language() {
    return this.file.language;
  }

  get fullpath() {
    return getFullpath(this.paths);
  }

  updateCode(code: string) {
    this.code = code;
    // event.trigger("updateCode", { file: this, newCode: code });
  }
}
