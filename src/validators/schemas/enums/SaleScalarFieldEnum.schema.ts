import * as Yup from 'yup';

export const SaleScalarFieldEnumSchema = Yup.mixed().oneOf(["id","reference","updatedAt","createdAt","usersId","itemsId"])