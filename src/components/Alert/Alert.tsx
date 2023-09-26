import { ComponentPropsWithRef } from "react";
import { Alert as MUIComponent, AlertProps } from "@mui/material";

interface MergeProps extends Omit<AlertProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-alert/
 */
const Alert = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Alert;