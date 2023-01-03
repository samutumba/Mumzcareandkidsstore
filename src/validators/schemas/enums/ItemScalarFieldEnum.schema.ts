import * as Yup from 'yup';

export const ItemScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","color","material","size","model","sold","updatedAt","createdAt","salesId","productsId"])