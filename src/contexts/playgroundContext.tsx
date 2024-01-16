// import { ClasserProvider } from "@code-hike/classer";
import * as React from "react";

import type { PlaygroundContext, PlaygroundProviderProps } from "../types";
import { useEditor } from "./utils/useEditor";
import { useFile } from "./utils/useFile";
import { useAppState } from "./utils/useAppState";

const Playground = React.createContext<PlaygroundContext | null>(null);

export const PlaygroundProvider: React.FC<PlaygroundProviderProps> = (
  props
) => {
  const { children, style, className } = props;
  const editorState = useEditor();
  
  const appState = useAppState(props);
  const fileState = useFile(props,appState);
  return (
    <Playground.Provider
      value={{
        ...editorState,
        ...fileState,
        ...appState,
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
