import { ComponentPropsWithRef } from "react";
import { ImageList as MUIComponent, ImageListProps } from "@mui/material";

interface MergeProps extends Omit<ImageListProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-image-list//
 */
const ImageList = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default ImageList;