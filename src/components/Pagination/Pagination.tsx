import { ComponentPropsWithRef } from "react";
import { Pagination as MUIComponent, PaginationProps } from "@mui/material";

interface MergeProps extends Omit<PaginationProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-pagination//
 */
const Pagination = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Pagination;