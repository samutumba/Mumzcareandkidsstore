// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailNullableCreateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';

export const CartItemCreateManyCartInputObjectSchema = Yup.object({
    id: Yup.string(),  quantity: Yup.number(),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableCreateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  productsId: Yup.string().required(),  salesId: Yup.mixed().oneOfSchemas([Yup.string()]),  wishlistId: Yup.mixed().oneOfSchemas([Yup.string()])
});
