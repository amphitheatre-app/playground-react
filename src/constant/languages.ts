import { Monaco } from "@monaco-editor/react";

// Java、.NET、NodeJS、Go、Python、PHP、Ruby、Rust、Leo、Solidity、Move、Cairo

export const languages = [
  "java",
  "csharp",
  "javascript",
  "typescript",
  "css",
  "go",
  "python",
  "php",
  "ruby",
  "rust",
  "solidity",
  "move",
  "cairo",
  "json",
];

export const fileExtension = {
  ".java": "java",
  ".cs": "csharp",
  ".js": "javascript",
  ".ts": "typescript",
  ".css": "css",
  ".go": "go",
  ".py": "python",
  ".php": "php",
  ".rb": "ruby",
  ".rs": "rust",
  ".sol": "solidity",
  ".move": "move",
  ".cairo": "cairo",
  ".json": "json",
} as Record<string, string>;

export const mappingLanguage = {
  csharp: ".net",
} as Record<string, string>;

export const getLanguagesConfig = (monaco: Monaco | null) => {
  if (!monaco) {
    return [];
  }
  const allLanguages = monaco?.languages?.getLanguages() ?? [];
  return allLanguages.filter(({ id }) => languages.includes(id));
};

export const getFileLanguage = (path) => {
  const res = path.match(/\.([^.]+)$/);
  if (!res?.[0]) {
    return "";
  }
  return fileExtension[res?.[0] as any] ?? "";
};
