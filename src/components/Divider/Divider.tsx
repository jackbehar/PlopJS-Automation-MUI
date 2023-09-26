import { ComponentPropsWithRef } from "react";
import { Divider as MUIComponent, DividerProps } from "@mui/material";

interface MergeProps extends Omit<DividerProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-divider//
 */
const Divider = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Divider;