import { ComponentPropsWithRef } from "react";
import { ButtonGroup as MUIComponent, ButtonGroupProps } from "@mui/material";

interface MergeProps extends Omit<ButtonGroupProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-button-group/
 */
const ButtonGroup = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default ButtonGroup;