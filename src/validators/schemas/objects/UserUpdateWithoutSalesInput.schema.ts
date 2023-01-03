// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUpdatephoneInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PickupUpdateManyWithoutUserNestedInputObjectSchema } from '../internals';;
import { CartUpdateManyWithoutUsersNestedInputObjectSchema } from '../internals';;
import { WishlistUpdateManyWithoutUsersNestedInputObjectSchema } from '../internals';;
import { ReviewUpdateManyWithoutUserNestedInputObjectSchema } from '../internals';;
import { InquiryUpdateManyWithoutUserNestedInputObjectSchema } from '../internals';

export const UserUpdateWithoutSalesInputObjectSchema = Yup.object({
    v: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  auth: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  lastAccessed: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  password: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  phone: Yup.mixed().oneOfSchemas([UserUpdatephoneInputObjectSchema,
Yup.array().of(Yup.string())]),  points: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  policyAccepted: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  preferredCommunicationMethod: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  username: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  email: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  whatsAppNumber: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  googleId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  facebookId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  verified: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  pickups: PickupUpdateManyWithoutUserNestedInputObjectSchema,  cart: CartUpdateManyWithoutUsersNestedInputObjectSchema,  wishlist: WishlistUpdateManyWithoutUsersNestedInputObjectSchema,  reviews: ReviewUpdateManyWithoutUserNestedInputObjectSchema,  inquiries: InquiryUpdateManyWithoutUserNestedInputObjectSchema
});
