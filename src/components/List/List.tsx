import { ComponentPropsWithRef } from "react";
import { List as MUIComponent, ListProps } from "@mui/material";

interface MergeProps extends Omit<ListProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-list//
 */
const List = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default List;