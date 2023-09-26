import { ComponentPropsWithRef } from "react";
import { Checkbox as MUIComponent, CheckboxProps } from "@mui/material";

interface MergeProps extends Omit<CheckboxProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-checkbox//
 */
const Checkbox = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Checkbox;