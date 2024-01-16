import type { UseAppState, UseFile, UseFileProps, Files } from "../../types";
import { useEffect, useState } from "react";
import { CustomFile } from "../../utils/File";
import { useAsyncMemo,useEvent } from "../../hooks";



export function useFile(props: UseFileProps, appState: UseAppState): UseFile {
  const { path, entry, branch } = props;
  const [files, setFiles] = useState<Files>({});
  const [currentFilePath, setCurrentFilePath] = useState(entry);
  const currentFile = useAsyncMemo<CustomFile>(async () => {
    if (JSON.stringify(files) === "{}") {
      return null;
    }
    const file = new CustomFile(files, { path, currentFilePath, branch });
    await file.initCode();
    return file;
  }, [files, currentFilePath]);

  useEffect(() => {
    if (!appState.pgId) {
      return;
    }
    console.log("getFileTree");
    // setFiles
    setFiles({
      "src/index.ts": { language: "javascript", path: "src/index.ts" },
    });
  }, [appState.pgId]);

  useEffect(() => {
    setCurrentFilePath(entry);
  }, [path, entry, branch]);

  useEvent(
    "run",
    () => {
      if (!currentFile) {
        return;
      }
      const code = currentFile?.code;
      console.log("update", code);
    },
    [currentFile]
  );

  const changeFile = (filePath: string) => {
    setCurrentFilePath(filePath);
  };

  return {
    files,
    currentFile,
    changeFile,
  };
}
