import * as Yup from 'yup';

export const ReviewScalarFieldEnumSchema = Yup.mixed().oneOf(["id","rating","description","updatedAt","createdAt","productsId","usersId"])