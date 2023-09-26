import { ComponentPropsWithRef } from "react";
import { Banner as MUIComponent, BannerProps } from "@mui/material";

interface MergeProps extends Omit<BannerProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com/Composable/
 */
const Banner = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Banner;