// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemUpdateManyWithoutCartNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutCartNestedInputObjectSchema } from '../internals';

export const CartUpdateInputObjectSchema = Yup.object({
    items: CartItemUpdateManyWithoutCartNestedInputObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  users: UserUpdateOneRequiredWithoutCartNestedInputObjectSchema
});
