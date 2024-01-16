import React, { useMemo, useRef, useState } from "react";
import "./style.less";
import { Style } from "../../types";
import { usePlayground } from "../../hooks";
import { classNames } from "../../utils/classNames";

interface LayoutProps extends Style {
  children?: React.ReactNode;
}

const useMove = () => {
  const dragEventTargetRef = useRef<HTMLDivElement | null>();
  const [horizontalSize, setHorizontalSize] = React.useState(50);

  const onMouseDown = (e) => {
    dragEventTargetRef.current = e.target;
  };

  const onDragMove = (e) => {
    if (!dragEventTargetRef.current) return;

    const container = dragEventTargetRef.current.parentElement as
      | HTMLDivElement
      | undefined;

    if (!container) return;
    const { left, top, height, width } = container.getBoundingClientRect();
    const offset = ((e.clientX - left) / width) * 100;
    const boundaries = Math.min(Math.max(offset, 25), 75);

    setHorizontalSize(boundaries);
  };
  const stopDragging = (): void => {
    dragEventTargetRef.current = null;
  };

  const rightColumnStyle = {
    flexGrow: 100 - horizontalSize,
    flexShrink: 100 - horizontalSize,
    flexBasis: 0,
    width: 100 - horizontalSize + "%",
    gap: 1,
  };

  React.useEffect(() => {
    document.body.addEventListener("mousemove", onDragMove);
    document.body.addEventListener("mouseup", stopDragging);

    return (): void => {
      document.body.removeEventListener("mousemove", onDragMove);
      document.body.removeEventListener("mouseup", stopDragging);
    };
  }, []);
  return { horizontalSize, onMouseDown, rightColumnStyle };
};

export const Layout = ({
  children,
  className = "",
  style = {},
}: LayoutProps) => {
  const { horizontalSize, onMouseDown, rightColumnStyle } = useMove();
  return (
    <div className={classNames("pg-layout", className)} style={style}>
      <div
        style={{
          flexGrow: horizontalSize,
          flexShrink: horizontalSize,
          flexBasis: 0,
          overflow: "hidden",
        }}
      >
        {/* 左边的元素 */}
        {children[0]}
      </div>

      {/* 中间的拖动条 */}
      <div
        className="pg-resize-handler"
        style={{
          left: `calc(${horizontalSize}% - 5px)`,
        }}
        onMouseDown={onMouseDown}
      />

      <div style={rightColumnStyle}>
        {/* 右边的元素 */}
        {children[1]}
      </div>
    </div>
  );
};
