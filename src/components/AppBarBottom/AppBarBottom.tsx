import { ComponentPropsWithRef } from "react";
import { AppBar:bottom as MUIComponent, AppBarBottomProps } from "@mui/material";

interface MergeProps extends Omit<AppBarBottomProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-app-bar#bottom-app-bar//
 */
const AppBarBottom = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default AppBarBottom;