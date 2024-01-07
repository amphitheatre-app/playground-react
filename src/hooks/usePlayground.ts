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
  const playgroud = React.useContext(PlaygroundReactContext);

  if (playgroud === null) {
    throw new Error(
      `[playgroud-react]: "usePlayground" must be wrapped by a "SandpackProvider"`
    );
  }

  const { dispatch, listen, ...rest } = playgroud;

  return {
    playgroud: { ...rest },
    dispatch,
    listen,
  };
}
