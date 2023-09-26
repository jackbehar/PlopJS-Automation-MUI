import { ComponentPropsWithRef } from "react";
import { Breadcrumbs as MUIComponent, BreadcrumbsProps } from "@mui/material";

interface MergeProps extends Omit<BreadcrumbsProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-breadcrumbs/
 */
const Breadcrumbs = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Breadcrumbs;