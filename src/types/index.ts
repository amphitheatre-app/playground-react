import { Monaco, MonacoDiffEditor } from "@monaco-editor/react";
import { CustomFile } from "../utils/File";

export interface PlaygroundProps extends Style {
  path: string;
  entry: string;
  branch: string;
  height: string | number;
}

export type PlaygroundContext = {} & PlaygroundState;

export type CallbackFunction = (data: any) => void;

export interface Style {
  className?: string;
  style?: React.CSSProperties;
}

export interface PlaygroundProviderProps
  extends Style,
    Omit<PlaygroundProps, "height"> {
  children?: React.ReactNode;
}

export interface EditorOperations {
  handlerEditorDidMount: (editor: MonacoDiffEditor, monaco: Monaco) => void;
}

export interface UseEditor {
  editorLoading: boolean;
  editorRef: React.MutableRefObject<MonacoDiffEditor | null>;
  monacoRef: React.MutableRefObject<Monaco | null>;
  editorOperations: EditorOperations;
}

export interface UseFileProps {
  path: string;
  entry: string;
  branch: string;
}

export interface UseAppStateProps {
  path: string;
  entry: string;
  branch: string;
}
export type File = { code?: string; language: string; path: string };
export type Files = { [path: string]: File };

export interface UseFile {
  files: Files;
  currentFile: CustomFile | null;
  changeFile: (path: string) => void;
}
export interface UseAppState {
  pgId: string;
}

export interface PlaygroundState extends UseEditor, UseAppState, UseFile {}
