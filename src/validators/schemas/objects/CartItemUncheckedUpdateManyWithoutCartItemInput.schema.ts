// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { CartDetailNullableUpdateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';

export const CartItemUncheckedUpdateManyWithoutCartItemInputObjectSchema = Yup.object({
    quantity: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableUpdateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  cartId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  salesId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  wishlistId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema])
});