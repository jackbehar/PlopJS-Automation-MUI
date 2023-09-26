import { ComponentPropsWithRef } from "react";
import { Tabs as MUIComponent, TabsProps } from "@mui/material";

interface MergeProps extends Omit<TabsProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-tabs//
 */
const Tabs = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Tabs;