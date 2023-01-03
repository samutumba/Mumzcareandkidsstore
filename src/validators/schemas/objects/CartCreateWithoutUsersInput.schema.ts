// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateNestedManyWithoutCartInputObjectSchema } from '../internals';

export const CartCreateWithoutUsersInputObjectSchema = Yup.object({
    id: Yup.string(),  items: CartItemCreateNestedManyWithoutCartInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date()
});
