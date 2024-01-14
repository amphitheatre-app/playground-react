import React, { useEffect, useState } from "react";
import "./style.less";
import { getLanguagesConfig, mappingLanguage } from "../../constant/languages";
import { usePlayground } from "../../hooks/usePlayground";
// import Select from "../Select";
import { RunIcon } from "../icons";
import { event } from "../../utils/Event";
import { MenuItem, Select } from "@mui/material";

interface ToolbarProps {
  value?: string | undefined;
  defaultValue?: string | undefined;
  onChange?: ((val: string) => void) | undefined;
}

// get languages list
const useLanguages = () => {
  const { playground } = usePlayground();
  const { monacoRef, editorLoading } = playground;
  const [languages, setLanguages] = useState<any[]>([]);
  console.log(languages);
  useEffect(() => {
    if (editorLoading) {
      return;
    }
    let languagesData = getLanguagesConfig(monacoRef?.current).map(
      (language) => ({
        label: mappingLanguage?.[language.id] ?? language.id,
        value: language.id,
      })
    );
    setLanguages(languagesData);
  }, [editorLoading]);
  return { languages };
};

const RunButton = () => {
  return (
    <div
      className="run-button"
      onClick={() => {
        event.trigger("run");
      }}
    >
      <span style={{ marginRight: "4px" }}>Run</span>
      <RunIcon></RunIcon>
    </div>
  );
};

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 36 * 5 + 8,
    },
  },
};

/**
 * Primary UI component for user interaction
 */
export const Toolbar = ({
  value,
  onChange,
  defaultValue,
}: // onRun,
ToolbarProps) => {
  const { languages } = useLanguages();

  return (
    <div className="pg-toolbar">
      {languages?.length > 0 && (
        <Select
          style={{ marginRight: "8px" }}
          value={value}
          onChange={(e) => onChange && onChange(e?.target?.value)}
          defaultValue={defaultValue}
          displayEmpty
          autoWidth
          MenuProps={MenuProps}
        >
          {languages?.map((language) => (
            <MenuItem key={language.value} value={language.value}>
              {language.label}
            </MenuItem>
          ))}
        </Select>
      )}

      <RunButton></RunButton>
    </div>
  );
};
