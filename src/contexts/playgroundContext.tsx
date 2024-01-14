// import { ClasserProvider } from "@code-hike/classer";
import * as React from "react";

import type {
  PlaygroundContext,
  PlaygroundProviderProps,
  UseEditor,
  UseFile,
  UseFileProps,
} from "../types";
import { useRef, useState } from "react";
import { Monaco, MonacoDiffEditor } from "@monaco-editor/react";
import { event } from "../utils/Event";

const Playground = React.createContext<PlaygroundContext | null>(null);

function useEditor(): UseEditor {
  // const [language,setLanguage] = useState<Language>('');
  const editorRef = useRef<MonacoDiffEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const [editorLoading, setEdtorLoading] = useState(true);

  const editorOperations = {
    handlerEditorDidMount: (editor: MonacoDiffEditor, monaco: Monaco) => {
      window.mmm = monaco;
      window.eee = editor;
      editorRef.current = editor;
      monacoRef.current = monaco;

      // regist event
      onRunEvent({ editor, monaco });
      setEdtorLoading(false);
    },
  };
  return {
    editorLoading,
    editorRef,
    monacoRef,
    editorOperations,
  };
}
// register event 'run'
const onRunEvent = ({
  editor,
  monaco,
}: {
  editor: MonacoDiffEditor;
  monaco: Monaco;
}) => {
  event.on('run',()=>{
    // TODO
    console.log('event run')
  })
};

function useFile({}: UseFileProps): UseFile {
  const [currentFile, setCurrentFile] = useState("");
  const files: string[] = [];
  return {
    files,
    currentFile,
  };
}

export const PlaygroundProvider: React.FC<PlaygroundProviderProps> = (
  props
) => {
  const { children, style, className } = props;
  const editorState = useEditor();
  const fileState = useFile(props);
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
