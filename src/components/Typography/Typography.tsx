import { ComponentPropsWithRef } from "react";
import { Typography as MUIComponent, TypographyProps } from "@mui/material";

interface MergeProps extends Omit<TypographyProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-typography//
 */
const Typography = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Typography;