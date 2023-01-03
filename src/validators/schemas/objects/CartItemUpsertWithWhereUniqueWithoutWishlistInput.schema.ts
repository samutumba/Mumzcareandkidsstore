// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';

export const CartItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutWishlistInputObjectSchema,
CartItemUncheckedUpdateWithoutWishlistInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutWishlistInputObjectSchema,
CartItemUncheckedCreateWithoutWishlistInputObjectSchema])
});
