import { ComponentPropsWithRef } from "react";
import { Chip as MUIComponent, ChipProps } from "@mui/material";

interface MergeProps extends Omit<ChipProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-chip//
 */
const Chip = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Chip;