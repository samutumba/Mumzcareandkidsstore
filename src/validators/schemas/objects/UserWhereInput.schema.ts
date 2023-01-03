// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { PickupListRelationFilterObjectSchema } from '../internals';;
import { CartListRelationFilterObjectSchema } from '../internals';;
import { WishlistListRelationFilterObjectSchema } from '../internals';;
import { SaleListRelationFilterObjectSchema } from '../internals';;
import { ReviewListRelationFilterObjectSchema } from '../internals';;
import { InquiryListRelationFilterObjectSchema } from '../internals';

export const UserWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  auth: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  lastAccessed: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  password: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  phone: StringNullableListFilterObjectSchema,  points: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  policyAccepted: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  preferredCommunicationMethod: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  username: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  email: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  whatsAppNumber: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  googleId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  facebookId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  verified: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  pickups: PickupListRelationFilterObjectSchema,  cart: CartListRelationFilterObjectSchema,  wishlist: WishlistListRelationFilterObjectSchema,  sales: SaleListRelationFilterObjectSchema,  reviews: ReviewListRelationFilterObjectSchema,  inquiries: InquiryListRelationFilterObjectSchema
});
