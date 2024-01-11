import * as React from "react";

import { PlaygroundReactContext } from "../contexts/playgroundContext";
import { PlaygroundState } from "../types";

/**
 * @category Hooks
 */
export interface UsePlayground {
  playground:PlaygroundState
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

  // const { dispatch, listen, ...rest } = playground;

  return {
    playground,
    // dispatch,
    // listen,
  };
}
