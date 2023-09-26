import { ComponentPropsWithRef } from "react";
import { DataGrid as MUIComponent, DataGridProps } from "@mui/material";

interface MergeProps extends Omit<DataGridProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//x/react-data-grid//
 */
const DataGrid = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default DataGrid;