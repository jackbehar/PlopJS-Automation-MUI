import { ComponentPropsWithRef } from "react";
import { FloatingActionButton as MUIComponent, FloatingActionButtonProps } from "@mui/material";

interface MergeProps extends Omit<FloatingActionButtonProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-floating-action-button/
 */
const FloatingActionButton = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default FloatingActionButton;