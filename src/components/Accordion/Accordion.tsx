import { ComponentPropsWithRef } from "react";
import { Accordion as MUIComponent, AccordionProps } from "@mui/material";

interface MergeProps extends Omit<AccordionProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//material-ui/react-accordion//
 */
const Accordion = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default Accordion;