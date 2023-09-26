import { ComponentPropsWithRef } from "react";
import { Timeline as MUIComponent, TimelineProps } from "@mui/material";

interface MergeProps extends Omit<TimelineProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-timeline//
 */
const Timeline = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Timeline;