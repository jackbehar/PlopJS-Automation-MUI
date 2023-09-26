import { ComponentPropsWithRef } from "react";
import { Tooltip as MUIComponent, TooltipProps } from "@mui/material";

interface MergeProps extends Omit<TooltipProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-tooltip//
 */
const Tooltip = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Tooltip;