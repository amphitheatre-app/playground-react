import * as React from "react";

import { PlaygroundReactContext } from "../contexts/playgroundContext";
import { PlaygroundState } from "../types";
import { useEffect } from "react";

/**
 * @category Hooks
 */
export interface UsePlayground {
  playground: PlaygroundState;
}

/**
 * @category Hooks
 */
export function usePlayground(): UsePlayground {
  const playground = React.useContext(PlaygroundReactContext);
  if (playground === null) {
    throw new Error(
      `[playground-react]: "usePlayground" must be wrapped by a "SandpackProvider"`
    );
  }

  return {
    playground,
    // listen,
  };
}
