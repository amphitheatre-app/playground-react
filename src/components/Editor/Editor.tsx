import React, { useEffect, useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import "./style.less";
import noop from "../../utils";
import SSE from "../../server/serverSentEvent";
import { useSSESub } from "../../hooks";
import { Toolbar } from "../..";
import { usePlayground } from "../../hooks";
import { data } from "./data";

interface EditorProps {
  // value?: string;
  theme?: string;
  // language?: string;
  // defaultLanguage?: string;
  defaultValue?: string;
  // onLanguageChange?: (val: string) => void;
  // onValidate?: (val: string) => void;
  innerProps?: any;
}

const useEdiotrProps = (props: EditorProps) => {
  const { playground } = usePlayground();
  const { currentFile } = playground;
  const {
    theme = "vs-dark",
    // language = "javascript",
    // language,
    // defaultLanguage = "javascript",
    defaultValue = "// some comment",
    // onLanguageChange,
    // onValidate = noop,
    // innerProps,
  } = props;
  const onChange = (code) => {
    currentFile?.updateCode(code);
  };
  return {
    theme,
    language: currentFile?.language,
    value: currentFile?.code ?? defaultValue,
    defaultValue,
    onChange,
  };
};

/**
 * Primary UI component for user interaction
 */
export const Editor = (props: EditorProps) => {
  const { innerProps } = props;
  const editorProps = useEdiotrProps(props);
  const { playground } = usePlayground();
  const { editorOperations } = playground;
  const { handlerEditorDidMount } = editorOperations;

  useEffect(() => {
    const sse = new SSE();
    return sse.close;
  }, []);

  return (
    <div className="pg-editor">
      <MonacoEditor
        {...innerProps}
        {...editorProps}
        path={"filename"}
        onMount={(editor, monaco) => {
          handlerEditorDidMount(editor, monaco);
        }}
      />
      <Toolbar value={editorProps.language}></Toolbar>
    </div>
  );
};
