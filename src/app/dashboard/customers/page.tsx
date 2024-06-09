import * as React from 'react';
import type { Metadata } from 'next';
import Typography from '@mui/material/Typography';
import { config } from '@/config';

export const metadata = {title:"10TIYAAB Customers"} satisfies Metadata;
export default function Page(): React.JSX.Element {
  
  return(
    <Typography>Customers page</Typography>
  )
}


