// import { ClasserProvider } from "@code-hike/classer";
import * as React from "react";

import type { PlaygroundContext, PlaygroundProviderProps, UseEditor } from "../types";
import { useRef, useState } from "react";
import { Monaco, MonacoDiffEditor } from "@monaco-editor/react";

const Playground = React.createContext<PlaygroundContext | null>(null);



function useEditor(): UseEditor {
  // const [language,setLanguage] = useState<Language>('');
  const editorRef = useRef<MonacoDiffEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  return {
    editorRef,
    monacoRef,
    handlerEditorDidMount: (editor: MonacoDiffEditor, monaco: Monaco) => {
      editorRef.current = editor;
      monacoRef.current = monaco;
    },
  };
}

export const PlaygroundProvider: React.FC<PlaygroundProviderProps> = (
  props
) => {
  const { children, style, className } = props;
  const editorState = useEditor();
  console.log(editorState, 55555);
  return (
    <Playground.Provider
      value={{
        ...editorState,
      }}
    >
      <div className={`${className}`} style={style}>
        {children}
      </div>
    </Playground.Provider>
  );
};

/**
 * @category Provider
 */
const PlaygroundConsumer = Playground.Consumer;

export { PlaygroundConsumer, Playground as PlaygroundReactContext };
