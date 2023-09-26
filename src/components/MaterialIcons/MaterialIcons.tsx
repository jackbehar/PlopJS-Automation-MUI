import { ComponentPropsWithRef } from "react";
import { MaterialIcons as MUIComponent, MaterialIconsProps } from "@mui/material";

interface MergeProps extends Omit<MaterialIconsProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/material-icons//
 */
const MaterialIcons = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default MaterialIcons;