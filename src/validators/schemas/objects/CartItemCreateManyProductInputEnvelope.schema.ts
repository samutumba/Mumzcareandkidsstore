// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateManyProductInputObjectSchema } from '../internals';

export const CartItemCreateManyProductInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CartItemCreateManyProductInputObjectSchema)
});
