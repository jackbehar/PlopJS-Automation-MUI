import { ComponentPropsWithRef } from "react";
import { Menu as MUIComponent, MenuProps } from "@mui/material";

interface MergeProps extends Omit<MenuProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-menu//
 */
const Menu = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Menu;