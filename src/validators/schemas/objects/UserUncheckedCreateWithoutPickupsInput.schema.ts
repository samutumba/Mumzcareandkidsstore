// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreatephoneInputObjectSchema } from '../internals';;
import { CartUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateNestedManyWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateNestedManyWithoutUserInputObjectSchema } from '../internals';

export const UserUncheckedCreateWithoutPickupsInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  auth: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  lastAccessed: Yup.date(),  name: Yup.string().required(),  password: Yup.mixed().oneOfSchemas([Yup.string()]),  phone: Yup.mixed().oneOfSchemas([UserCreatephoneInputObjectSchema,
Yup.array().of(Yup.string())]),  points: Yup.number(),  policyAccepted: Yup.boolean(),  preferredCommunicationMethod: Yup.string(),  updatedAt: Yup.date(),  username: Yup.string().required(),  email: Yup.mixed().oneOfSchemas([Yup.string()]),  whatsAppNumber: Yup.mixed().oneOfSchemas([Yup.string()]),  googleId: Yup.mixed().oneOfSchemas([Yup.string()]),  facebookId: Yup.mixed().oneOfSchemas([Yup.string()]),  verified: Yup.boolean(),  cart: CartUncheckedCreateNestedManyWithoutUsersInputObjectSchema,  wishlist: WishlistUncheckedCreateNestedManyWithoutUsersInputObjectSchema,  sales: SaleUncheckedCreateNestedManyWithoutUserInputObjectSchema,  reviews: ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema,  inquiries: InquiryUncheckedCreateNestedManyWithoutUserInputObjectSchema
});
