import React from "react";
import MonacoEditor from "@monaco-editor/react";
import "./editor.less";
import noop from "../../utils";

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
  return <MonacoEditor height={'100%'} {...innerProps} {...editorProps} />;
};
