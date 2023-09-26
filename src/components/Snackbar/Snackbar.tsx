import { ComponentPropsWithRef } from "react";
import { Snackbar as MUIComponent, SnackbarProps } from "@mui/material";

interface MergeProps extends Omit<SnackbarProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-snackbar//
 */
const Snackbar = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Snackbar;