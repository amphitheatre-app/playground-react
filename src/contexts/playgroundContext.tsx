// import { ClasserProvider } from "@code-hike/classer";
import * as React from "react";

import type { PlaygroundContext, PlaygroundProviderProps } from "../types";


const Playground = React.createContext<PlaygroundContext | null>(null);

export const PlaygroundProvider: React.FC<PlaygroundProviderProps> = (
  props
) => {
  const { children, style, className } = props;

  return (
    <Playground.Provider
      value={{
        editorValue: "test",
        consoleValue: "test2",
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
