// TreeItem.tsx
import React, { useState } from "react";

interface TreeItemProps<T> {
  item: T;
  getName: (item: T) => string;
  getChildren: (item: T) => T[] | undefined;
}

function TreeItem<T>({ item, getName, getChildren }: TreeItemProps<T>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const children = getChildren(item);
  const hasChildren = children && children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div style={{ marginLeft: "20px", color: "black", display: "flex", flexDirection: "column" }}>
      <div
        onClick={handleClick}
        style={{ cursor: hasChildren ? "pointer" : "default" }}
      >
        {hasChildren && (isExpanded ? "▼" : "▶")} {getName(item)}
      </div>
      {hasChildren && isExpanded && (
        <div>
          {children!.map((child, index) => (
            <TreeItem
              key={index}
              item={child}
              getName={getName}
              getChildren={getChildren}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeItem;
