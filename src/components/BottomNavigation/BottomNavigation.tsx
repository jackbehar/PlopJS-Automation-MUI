import { ComponentPropsWithRef } from "react";
import { BottomNavigation as MUIComponent, BottomNavigationProps } from "@mui/material";

interface MergeProps extends Omit<BottomNavigationProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-bottom-navigation//
 */
const BottomNavigation = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default BottomNavigation;