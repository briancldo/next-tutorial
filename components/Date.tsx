import React from 'react';
import { parseISO, format } from "date-fns";

interface DateProps {
  dateString: string;
}

const Date: React.FC<DateProps> = (props) => {
  const { dateString } = props;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
export default Date;
