import { ComponentPropsWithRef } from "react";
import { AppBar:top as MUIComponent, AppBarTopProps } from "@mui/material";

interface MergeProps extends Omit<AppBarTopProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-app-bar//
 */
const AppBarTop = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default AppBarTop;