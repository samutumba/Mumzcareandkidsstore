import { decode } from 'html-entities';
import parse from 'html-react-parser';

export class Format {
 static currency(amount: number) {
   return Intl.NumberFormat('en-UK', { style: 'currency', currency: 'UGX' }).format(amount)
 }
 
  static quill(delta: string) {
   /* eslint-disable */
  return parse(decode(delta))
 }

 static delta(i: string) {
  return decode(i)
  }
  
  
 } 