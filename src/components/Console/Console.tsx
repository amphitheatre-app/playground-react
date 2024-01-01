import React from "react";
import Ansi from "ansi-to-react";
import "./console.less";

interface ConsoleProps {}

const data = [
  {
    data: "Server running at http://127.0.0.1:3000/",
    id: 5,
  },
];
/**
 * Primary UI component for user interaction
 */
export const Console = ({}: ConsoleProps) => {
  return (
    <div className="pg-console">
      <div className="pg-console-title">{">"} Console</div>
      <div className="pg-console-content">
        {data.map(({ data, id }) => {
          return (
            <div key={id}>
              <Ansi>{data}</Ansi>
            </div>
          );
        })}
      </div>
    </div>
  );
};
