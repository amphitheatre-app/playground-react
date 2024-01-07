export type PlaygroundContext = { editorValue?: string; consoleValue?: string };

export interface Style {
  className?: string;
  style?: React.CSSProperties;
}

export interface PlaygroundProviderProps extends Style {
  children?: React.ReactNode;
}
