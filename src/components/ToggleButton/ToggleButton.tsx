import { ComponentPropsWithRef } from "react";
import { ToggleButton as MUIComponent, ToggleButtonProps } from "@mui/material";

interface MergeProps extends Omit<ToggleButtonProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-toggle-button//
 */
const ToggleButton = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default ToggleButton;