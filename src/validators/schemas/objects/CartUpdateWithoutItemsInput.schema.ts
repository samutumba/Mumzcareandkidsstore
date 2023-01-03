// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutCartNestedInputObjectSchema } from '../internals';

export const CartUpdateWithoutItemsInputObjectSchema = Yup.object({
    updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  users: UserUpdateOneRequiredWithoutCartNestedInputObjectSchema
});
