// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreatephoneInputObjectSchema } from '../internals';;
import { PickupCreateNestedManyWithoutUserInputObjectSchema } from '../internals';;
import { CartCreateNestedManyWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistCreateNestedManyWithoutUsersInputObjectSchema } from '../internals';;
import { SaleCreateNestedManyWithoutUserInputObjectSchema } from '../internals';;
import { InquiryCreateNestedManyWithoutUserInputObjectSchema } from '../internals';

export const UserCreateWithoutReviewsInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  auth: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  lastAccessed: Yup.date(),  name: Yup.string().required(),  password: Yup.mixed().oneOfSchemas([Yup.string()]),  phone: Yup.mixed().oneOfSchemas([UserCreatephoneInputObjectSchema,
Yup.array().of(Yup.string())]),  points: Yup.number(),  policyAccepted: Yup.boolean(),  preferredCommunicationMethod: Yup.string(),  updatedAt: Yup.date(),  username: Yup.string().required(),  email: Yup.mixed().oneOfSchemas([Yup.string()]),  whatsAppNumber: Yup.mixed().oneOfSchemas([Yup.string()]),  googleId: Yup.mixed().oneOfSchemas([Yup.string()]),  facebookId: Yup.mixed().oneOfSchemas([Yup.string()]),  verified: Yup.boolean(),  pickups: PickupCreateNestedManyWithoutUserInputObjectSchema,  cart: CartCreateNestedManyWithoutUsersInputObjectSchema,  wishlist: WishlistCreateNestedManyWithoutUsersInputObjectSchema,  sales: SaleCreateNestedManyWithoutUserInputObjectSchema,  inquiries: InquiryCreateNestedManyWithoutUserInputObjectSchema
});
