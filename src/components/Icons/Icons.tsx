import { ComponentPropsWithRef } from "react";
import { Icons as MUIComponent, IconsProps } from "@mui/material";

interface MergeProps extends Omit<IconsProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/icons//
 */
const Icons = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Icons;