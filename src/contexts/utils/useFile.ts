import type { UseAppState, UseFile, UseFileProps, Files } from "../../types";
import { useEffect, useState } from "react";
import { CustomFile } from "../../utils/File";
import { useAsyncEffect, useAsyncMemo, useEvent } from "../../hooks";
import { getFileTree, startPlaygrond, updateDetails } from "../../server";

export function useFile(props: UseFileProps, appState: UseAppState): UseFile {
  const { path, entry, branch } = props;
  const [files, setFiles] = useState<Files>({});
  const [currentFilePath, setCurrentFilePath] = useState(entry);
  const currentFile = useAsyncMemo<CustomFile>(async () => {
    if (JSON.stringify(files) === "{}") {
      return null;
    }
    const file = new CustomFile(
      files,
      { path, currentFilePath, branch },
      {
        pgId: appState.pgId,
      }
    );
    await file.initCode();
    return file;
  }, [files, currentFilePath, appState.pgId]);

  useAsyncEffect(async () => {
    if (!appState.pgId) {
      return;
    }
    // setFiles
    const { tree } = await getFileTree({ pgId: appState.pgId });
    setFiles(tree);
  }, [appState.pgId]);

  useEffect(() => {
    setCurrentFilePath(entry);
  }, [path, entry, branch]);

  useEvent(
    "run",
    async () => {
      if (!currentFile) {
        return;
      }
      const code = currentFile?.code ?? "";
      await updateDetails({
        pgId: appState.pgId,
        path: currentFile.paths.currentFilePath,
        content: code,
      });
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
