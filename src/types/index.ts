import { Monaco, MonacoDiffEditor } from "@monaco-editor/react";

export type PlaygroundContext = {} & PlaygroundState;

export interface Style {
  className?: string;
  style?: React.CSSProperties;
}

export interface PlaygroundProviderProps extends Style {
  children?: React.ReactNode;
}

export interface UseEditor {
  editorRef: React.MutableRefObject<MonacoDiffEditor | null>;
  monacoRef: React.MutableRefObject<Monaco | null>;
  handlerEditorDidMount: (editor: MonacoDiffEditor, monaco: Monaco) => void;
}

export interface PlaygroundState extends UseEditor{
  
}
