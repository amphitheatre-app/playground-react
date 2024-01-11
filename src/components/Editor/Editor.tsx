import React, { useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import "./editor.less";
import noop from "../../utils";
import SSE from "../../server/serverSentEvent";
import { useSSESub } from "../../hooks/useSSESub";
import { Toolbar } from "../..";

interface EditorProps {
  value?: string;
  theme?: string;
  defaultLanguage?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onValidate?: (val: string) => void;
  innerProps?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Editor = ({
  value,
  theme = "vs-dark",
  defaultLanguage = "javascript",
  defaultValue = "// some comment",
  onChange = noop,
  onValidate = noop,
  innerProps,
}: EditorProps) => {
  const editorProps = {
    value,
    theme,
    defaultLanguage,
    defaultValue,
    onChange,
    onValidate,
  };

  useEffect(() => {
    const sse = new SSE();
    return sse.close;
  }, []);

  // useSSESub(() => {});

  return (
    <div className="pg-editor">
      <MonacoEditor
        height={"100%"}
        {...innerProps}
        {...editorProps}
      />
      <Toolbar></Toolbar>
    </div>
  );
};
