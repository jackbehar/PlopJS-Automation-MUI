import { ComponentPropsWithRef } from "react";
import { Switch as MUIComponent, SwitchProps } from "@mui/material";

interface MergeProps extends Omit<SwitchProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-switch//
 */
const Switch = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Switch;