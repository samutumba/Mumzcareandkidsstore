// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutWishlistNestedInputObjectSchema } from '../internals';

export const WishlistUpdateWithoutItemsInputObjectSchema = Yup.object({
    updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  users: UserUpdateOneRequiredWithoutWishlistNestedInputObjectSchema
});
