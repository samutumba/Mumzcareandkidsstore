// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema } from '../internals';

export const WishlistUncheckedCreateWithoutUsersInputObjectSchema = Yup.object({
    id: Yup.string(),  items: CartItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date()
});
