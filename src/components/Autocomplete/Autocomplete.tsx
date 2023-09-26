import { ComponentPropsWithRef } from "react";
import { Autocomplete as MUIComponent, AutocompleteProps } from "@mui/material";

interface MergeProps extends Omit<AutocompleteProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-autocomplete/
 */
const Autocomplete = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Autocomplete;