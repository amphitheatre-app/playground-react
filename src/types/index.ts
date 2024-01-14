import { Monaco, MonacoDiffEditor } from "@monaco-editor/react";

export type PlaygroundContext = {} & PlaygroundState;

export type CallbackFunction = (data: any) => void;

export interface Style {
  className?: string;
  style?: React.CSSProperties;
}

export interface PlaygroundProviderProps extends Style {
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

export interface UseFileProps {}

export interface UseFile {
  files: string[];
  currentFile: string;
}

export interface PlaygroundState extends UseEditor {}
