import { ComponentPropsWithRef } from "react";
import { Progress as MUIComponent, ProgressProps } from "@mui/material";

interface MergeProps extends Omit<ProgressProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-progress//
 */
const Progress = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Progress;