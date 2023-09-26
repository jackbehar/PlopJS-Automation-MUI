import { ComponentPropsWithRef } from "react";
import { Modal as MUIComponent, ModalProps } from "@mui/material";

interface MergeProps extends Omit<ModalProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-modal//
 */
const Modal = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Modal;