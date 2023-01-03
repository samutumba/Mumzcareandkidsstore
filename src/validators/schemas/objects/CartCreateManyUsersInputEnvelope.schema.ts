// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartCreateManyUsersInputObjectSchema } from '../internals';

export const CartCreateManyUsersInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CartCreateManyUsersInputObjectSchema)
});
