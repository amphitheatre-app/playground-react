// import { ClasserProvider } from "@code-hike/classer";
import * as React from "react";

import type { UseEditor } from "../../types";
import { useRef, useState } from "react";
import { Monaco, MonacoDiffEditor } from "@monaco-editor/react";

export function useEditor(): UseEditor {
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
