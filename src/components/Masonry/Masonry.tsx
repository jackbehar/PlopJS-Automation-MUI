import { ComponentPropsWithRef } from "react";
import { Masonry as MUIComponent, MasonryProps } from "@mui/material";

interface MergeProps extends Omit<MasonryProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-masonry//
 */
const Masonry = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Masonry;