import { ComponentPropsWithRef } from "react";
import { Dialog as MUIComponent, DialogProps } from "@mui/material";

interface MergeProps extends Omit<DialogProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-dialog//
 */
const Dialog = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Dialog;