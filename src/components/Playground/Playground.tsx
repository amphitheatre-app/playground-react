import React from "react";
import "./style.less";
import { PlaygroundProvider } from "../../contexts/playgroundContext";
import { Console, Editor, Layout } from "../..";
import { PlaygroundProps, Style } from "../../types";
import { classNames } from "../../utils/classNames";
import Event from "../../utils/Event";
import { ThemeProvider, createTheme } from "@mui/material/styles";



const RunEvent = new Event();
// const SseEvent = new Event();
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4081", // 设置主色
    },
    secondary: {
      main: "#64FFDA", // 设置次色
    },
    background: {
      default: "#121212", // 设置背景色
      paper: "#212121", // 设置面板背景色
    },
    text: {
      primary: "#FFFFFF", // 设置主色文字颜色
    },
  },
});

export const Playground = (props: PlaygroundProps) => {
  const { className, style, height = 500, ...otherProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <PlaygroundProvider
        className={classNames("pg", className)}
        style={{
          ...style,
          height: typeof height === "string" ? height : `${height}px`,
        }}
        {...otherProps}
      >
        <Layout>
          <Editor></Editor>
          <Console></Console>
        </Layout>
      </PlaygroundProvider>
    </ThemeProvider>
  );
};
