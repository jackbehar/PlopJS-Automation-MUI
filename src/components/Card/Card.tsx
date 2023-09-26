import { ComponentPropsWithRef } from "react";
import { Card as MUIComponent, CardProps } from "@mui/material";

interface MergeProps extends Omit<CardProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-card//
 */
const Card = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Card;