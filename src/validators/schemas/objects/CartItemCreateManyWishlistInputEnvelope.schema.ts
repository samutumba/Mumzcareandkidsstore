// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateManyWishlistInputObjectSchema } from '../internals';

export const CartItemCreateManyWishlistInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CartItemCreateManyWishlistInputObjectSchema)
});
