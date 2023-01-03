// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutCartInputObjectSchema } from '../internals';

export const CartCreateWithoutItemsInputObjectSchema = Yup.object({
    id: Yup.string(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  users: UserCreateNestedOneWithoutCartInputObjectSchema
});
