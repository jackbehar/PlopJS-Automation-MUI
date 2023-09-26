import { ComponentPropsWithRef } from "react";
import { DatePickers as MUIComponent, DatePickersProps } from "@mui/material";

interface MergeProps extends Omit<DatePickersProps, keyof ComponentPropsWithRef<'button'>> {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://mui.com//x/react-date-pickers/getting-started//
 */
const DatePickers = (props: MergeProps) => {
  return (
      <MUIComponent {...props}/>
  );
};

export default DatePickers;