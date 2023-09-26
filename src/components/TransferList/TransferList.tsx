import { ComponentPropsWithRef } from "react";
import { TransferList as MUIComponent, TransferListProps } from "@mui/material";

interface MergeProps extends Omit<TransferListProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-transfer-list//
 */
const TransferList = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default TransferList;