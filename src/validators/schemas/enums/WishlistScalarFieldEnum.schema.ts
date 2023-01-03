import * as Yup from 'yup';

export const WishlistScalarFieldEnumSchema = Yup.mixed().oneOf(["id","updatedAt","createdAt","usersId"])