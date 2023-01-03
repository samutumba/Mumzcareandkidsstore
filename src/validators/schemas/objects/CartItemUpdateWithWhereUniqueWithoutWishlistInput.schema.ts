// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutWishlistInputObjectSchema } from '../internals';

export const CartItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutWishlistInputObjectSchema,
CartItemUncheckedUpdateWithoutWishlistInputObjectSchema])
});
