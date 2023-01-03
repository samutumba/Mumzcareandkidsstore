import * as Yup from 'yup';

export const CartItemScalarFieldEnumSchema = Yup.mixed().oneOf(["id","quantity","cartId","productsId","salesId","wishlistId"])