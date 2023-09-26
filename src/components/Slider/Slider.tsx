import { ComponentPropsWithRef } from "react";
import { Slider as MUIComponent, SliderProps } from "@mui/material";

interface MergeProps extends Omit<SliderProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-slider//
 */
const Slider = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Slider;