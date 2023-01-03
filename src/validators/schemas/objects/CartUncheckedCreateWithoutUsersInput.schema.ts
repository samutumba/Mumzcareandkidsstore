// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from '../internals';

export const CartUncheckedCreateWithoutUsersInputObjectSchema = Yup.object({
    id: Yup.string(),  items: CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date()
});
