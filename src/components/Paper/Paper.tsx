import { ComponentPropsWithRef } from "react";
import { Paper as MUIComponent, PaperProps } from "@mui/material";

interface MergeProps extends Omit<PaperProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-paper//
 */
const Paper = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Paper;