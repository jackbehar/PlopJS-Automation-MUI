import { ComponentPropsWithRef } from "react";
import { Button as MUIComponent, ButtonProps } from "@mui/material";

interface MergeProps extends Omit<ButtonProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-button//
 */
const Button = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Button;