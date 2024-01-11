import React from "react";
import "./playground.less";
import { PlaygroundProvider } from "../../contexts/playgroundContext";
import { Console, Editor, Layout } from "../..";
import { Style } from "../../types";

interface PlaygroundProps extends Style {
  height: string | number;
}

export const Playground = ({
  className,
  style,
  height = 500,
}: PlaygroundProps) => {
  return (
    <PlaygroundProvider
      className={`pg ${className}`}
      style={{
        ...style,
        height: typeof height === "string" ? height : `${height}px`,
      }}
    >
      <Layout>
        <Editor></Editor>
        <Console></Console>
      </Layout>
    </PlaygroundProvider>
  );
};
