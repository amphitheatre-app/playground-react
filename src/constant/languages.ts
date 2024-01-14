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

export const mappingLanguage = {
  csharp: ".net",
} as Record<string,string>;

export const getLanguagesConfig = (monaco: Monaco | null) => {
  if (!monaco) {
    return [];
  }
  const allLanguages = monaco?.languages?.getLanguages() ?? [];
  return allLanguages.filter(({ id }) => languages.includes(id));
};
