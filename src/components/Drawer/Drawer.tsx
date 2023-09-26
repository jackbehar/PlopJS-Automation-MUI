import { ComponentPropsWithRef } from "react";
import { Drawer as MUIComponent, DrawerProps } from "@mui/material";

interface MergeProps extends Omit<DrawerProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-drawer//
 */
const Drawer = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Drawer;