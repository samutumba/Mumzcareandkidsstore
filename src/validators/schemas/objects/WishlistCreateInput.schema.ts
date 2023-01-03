// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateNestedManyWithoutWishlistInputObjectSchema } from '../internals';;
import { UserCreateNestedOneWithoutWishlistInputObjectSchema } from '../internals';

export const WishlistCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  items: CartItemCreateNestedManyWithoutWishlistInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date(),  users: UserCreateNestedOneWithoutWishlistInputObjectSchema
});
