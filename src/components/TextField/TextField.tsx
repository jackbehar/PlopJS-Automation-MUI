import { ComponentPropsWithRef } from "react";
import { TextField as MUIComponent, TextFieldProps } from "@mui/material";

interface MergeProps extends Omit<TextFieldProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-text-field//
 */
const TextField = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default TextField;