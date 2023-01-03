// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailNullableCreateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';

export const CartItemUncheckedCreateWithoutSalesInputObjectSchema = Yup.object({
    id: Yup.string(),  quantity: Yup.number(),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableCreateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  cartId: Yup.mixed().oneOfSchemas([Yup.string()]),  productsId: Yup.string().required(),  wishlistId: Yup.mixed().oneOfSchemas([Yup.string()])
});
