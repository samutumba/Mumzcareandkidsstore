import { useRecoilState } from "recoil";
import { cartState } from "../../atoms";
import { IProduct } from "../../types";

export class ClassService {
 
 
 static async add(product: IProduct, quantity: number) {
  
  
  return;
 }
 static async remove(product: IProduct) {
  return;
 }
 static async adjustQuantity(product: IProduct) {
  return;
 }
 static async clear() {
  return;
 }
}