import React from "react";
import "./playground.less";
import { PlaygroundProvider } from "../../contexts/playgroundContext";
import { Console, Editor, Layout } from "../..";
import { Style } from "../../types";

interface PlaygroundProps extends Style {
}

export const Playground = ({ className, style }: PlaygroundProps) => {
  return (
    <PlaygroundProvider className={`pg ${className}`} style={style}>
      <Layout>
        <Editor></Editor>
        <Console></Console>
      </Layout>
    </PlaygroundProvider>
  );
};
