export type PlaygroundContext = SandpackState & {};

export interface SandpackState {
  status: string;
}

export interface Style {
  className?: string;
  style?: React.CSSProperties;
}

export interface PlaygroundProviderProps extends Style {
  children?: React.ReactNode;
}
