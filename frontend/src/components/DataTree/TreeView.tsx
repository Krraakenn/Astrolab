// TreeView.tsx
import React from "react";
import TreeItem from "./TreeItem";

interface TreeViewProps<T> {
  data: T[];
  getName: (item: T) => string;
  getChildren: (item: T) => T[] | undefined;
}

function TreeView<T>({ data, getName, getChildren }: TreeViewProps<T>) {
  return (
    <div>
      {data.map((item, index) => (
        <TreeItem
          key={index}
          item={item}
          getName={getName}
          getChildren={getChildren}
        />
      ))}
    </div>
  );
}

export default TreeView;
