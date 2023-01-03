// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateManyCartInputObjectSchema } from '../internals';

export const CartItemCreateManyCartInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CartItemCreateManyCartInputObjectSchema)
});
