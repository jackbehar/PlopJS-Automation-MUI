import { ComponentPropsWithRef } from "react";
import { Skeleton as MUIComponent, SkeletonProps } from "@mui/material";

interface MergeProps extends Omit<SkeletonProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-skeleton//
 */
const Skeleton = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Skeleton;