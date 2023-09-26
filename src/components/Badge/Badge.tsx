import { ComponentPropsWithRef } from "react";
import { Badge as MUIComponent, BadgeProps } from "@mui/material";

interface MergeProps extends Omit<BadgeProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-badge/
 */
const Badge = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Badge;