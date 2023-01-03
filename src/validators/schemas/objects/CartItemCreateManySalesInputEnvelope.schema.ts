// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateManySalesInputObjectSchema } from '../internals';

export const CartItemCreateManySalesInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CartItemCreateManySalesInputObjectSchema)
});
