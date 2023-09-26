import { ComponentPropsWithRef } from "react";
import { SpeedDial as MUIComponent, SpeedDialProps } from "@mui/material";

interface MergeProps extends Omit<SpeedDialProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-speed-dial/
 */
const SpeedDial = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default SpeedDial;