import { ComponentPropsWithRef } from "react";
import { Stepper as MUIComponent, StepperProps } from "@mui/material";

interface MergeProps extends Omit<StepperProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-stepper//
 */
const Stepper = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Stepper;