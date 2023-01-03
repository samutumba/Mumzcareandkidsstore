// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from '../internals';

export const CartUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  items: CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date(),  usersId: Yup.string().required()
});
