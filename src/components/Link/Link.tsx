import { ComponentPropsWithRef } from "react";
import { Link as MUIComponent, LinkProps } from "@mui/material";

interface MergeProps extends Omit<LinkProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-link//
 */
const Link = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Link;