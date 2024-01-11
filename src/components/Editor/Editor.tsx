import React, { useEffect, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import "./editor.less";
import noop from "../../utils";
import SSE from "../../server/serverSentEvent";
import { useSSESub } from "../../hooks/useSSESub";
import { Toolbar } from "../..";
import { usePlayground } from "../../hooks/usePlayground";

interface EditorProps {
  value?: string;
  theme?: string;
  language?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onValidate?: (val: string) => void;
  innerProps?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Editor = ({
  // value,
  theme = "vs-dark",
  language = "javascript",
  // language = "freemarker2.tag-bracket.interpolation-dollar",
  defaultValue = "// some comment",
  onChange = noop,
  onValidate = noop,
  innerProps,
}: EditorProps) => {
  const editorProps = {
    // value,
    theme,
    language,
    defaultValue,
    onChange,
    onValidate,
  };

  const { playground } = usePlayground();
  console.log(playground, 666999);
  useEffect(() => {
    const sse = new SSE();
    return sse.close;
  }, []);
  // useSSESub(() => {});

  return (
    <div className="pg-editor">
      <MonacoEditor
        // height={"100%"}
        {...innerProps}
        {...editorProps}
        path={"filename"}
        onMount={(editor, monaco) => {
          editor.addOverlayWidget;
        }}
      />
      <Toolbar></Toolbar>
    </div>
  );
};
