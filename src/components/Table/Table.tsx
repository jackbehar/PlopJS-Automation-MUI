import { ComponentPropsWithRef } from "react";
import { Table as MUIComponent, TableProps } from "@mui/material";

interface MergeProps extends Omit<TableProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-table//
 */
const Table = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Table;