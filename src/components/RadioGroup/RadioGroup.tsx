import { ComponentPropsWithRef } from "react";
import { RadioGroup as MUIComponent, RadioGroupProps } from "@mui/material";

interface MergeProps extends Omit<RadioGroupProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-radio-button//
 */
const RadioGroup = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default RadioGroup;