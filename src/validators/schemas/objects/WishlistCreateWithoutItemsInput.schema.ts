// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutWishlistInputObjectSchema } from '../internals';

export const WishlistCreateWithoutItemsInputObjectSchema = Yup.object({
    id: Yup.string(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  users: UserCreateNestedOneWithoutWishlistInputObjectSchema
});
