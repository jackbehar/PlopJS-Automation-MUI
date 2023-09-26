import { ComponentPropsWithRef } from "react";
import { NavigationRail as MUIComponent, NavigationRailProps } from "@mui/material";

interface MergeProps extends Omit<NavigationRailProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//
 */
const NavigationRail = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default NavigationRail;