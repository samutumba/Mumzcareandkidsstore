// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailNullableCreateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';

export const CartItemCreateManyProductInputObjectSchema = Yup.object({
    id: Yup.string(),  quantity: Yup.number(),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableCreateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  cartId: Yup.mixed().oneOfSchemas([Yup.string()]),  salesId: Yup.mixed().oneOfSchemas([Yup.string()]),  wishlistId: Yup.mixed().oneOfSchemas([Yup.string()])
});
