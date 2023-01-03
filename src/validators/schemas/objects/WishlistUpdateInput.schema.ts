// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemUpdateManyWithoutWishlistNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutWishlistNestedInputObjectSchema } from '../internals';

export const WishlistUpdateInputObjectSchema = Yup.object({
    items: CartItemUpdateManyWithoutWishlistNestedInputObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  users: UserUpdateOneRequiredWithoutWishlistNestedInputObjectSchema
});
