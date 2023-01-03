import * as Yup from 'yup';

export const CartScalarFieldEnumSchema = Yup.mixed().oneOf(["id","updatedAt","createdAt","usersId"])