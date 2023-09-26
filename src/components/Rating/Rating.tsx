import { ComponentPropsWithRef } from "react";
import { Rating as MUIComponent, RatingProps } from "@mui/material";

interface MergeProps extends Omit<RatingProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-rating//
 */
const Rating = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Rating;