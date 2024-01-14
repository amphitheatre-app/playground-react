import React, { useEffect, useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import "./style.less";
import noop from "../../utils";
import SSE from "../../server/serverSentEvent";
import { useSSESub } from "../../hooks/useSSESub";
import { Toolbar } from "../..";
import { usePlayground } from "../../hooks/usePlayground";
import { data } from "./data";

interface EditorProps {
  value?: string;
  theme?: string;
  language?: string;
  defaultLanguage?: string;
  defaultValue?: string;
  onLanguageChange?: (val: string) => void;
  onValidate?: (val: string) => void;
  innerProps?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Editor = ({
  theme = "vs-dark",
  // language = "javascript",
  language,
  defaultLanguage = "javascript",
  defaultValue = "// some comment",
  onLanguageChange,
  onValidate = noop,
  innerProps,
}: EditorProps) => {
  const [internalLanguage, setInternalLanguage] = useState(language);
  const currentLanguage =  onLanguageChange ? language ?? defaultLanguage : internalLanguage;
  console.log(data,currentLanguage,data[currentLanguage],666999)
  const editorProps = {
    theme,
    language:currentLanguage,
    value:data[currentLanguage]??defaultValue,
    defaultValue,
    onValidate,
  };
  console.log(editorProps);
  const { playground } = usePlayground();
  const { editorOperations } = playground;
  const { handlerEditorDidMount } = editorOperations;

  useEffect(() => {
    const sse = new SSE();
    return sse.close;
  }, []);

  // if props have onLanguageChange use onLanguageChange, else use internal function to set current language
  const onChange = (val: string) => {
    if (onLanguageChange) {
      onLanguageChange(val);
      return;
    } else {
      setInternalLanguage(val);
    }
  };

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
      <Toolbar
        value={language}
        defaultValue={defaultLanguage}
        onChange={onChange}
      ></Toolbar>
    </div>
  );
};
