import * as React from "react";

import { PlaygroundReactContext } from "../contexts/playgroundContext";

/**
 * @category Hooks
 */
export interface UsePlayground {
}

/**
 * @category Hooks
 */
export function usePlayground(): UsePlayground {
  const sandpack = React.useContext(PlaygroundReactContext);

  if (sandpack === null) {
    throw new Error(
      `[sandpack-react]: "usePlayground" must be wrapped by a "SandpackProvider"`
    );
  }

  const { dispatch, listen, ...rest } = sandpack;

  return {
    sandpack: { ...rest },
    dispatch,
    listen,
  };
}
