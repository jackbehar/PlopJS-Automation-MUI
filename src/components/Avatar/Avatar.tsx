import { ComponentPropsWithRef } from "react";
import { Avatar as MUIComponent, AvatarProps } from "@mui/material";

interface MergeProps extends Omit<AvatarProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-avatar/
 */
const Avatar = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Avatar;