import { ComponentPropsWithRef } from "react";
import { TreeView as MUIComponent, TreeViewProps } from "@mui/material";

interface MergeProps extends Omit<TreeViewProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//x/react-tree-view//
 */
const TreeView = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default TreeView;