import { ComponentPropsWithRef } from "react";
import { Select as MUIComponent, SelectProps } from "@mui/material";

interface MergeProps extends Omit<SelectProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-select//
 */
const Select = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Select;