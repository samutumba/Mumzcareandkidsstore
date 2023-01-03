// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';

export const CartItemCreateOrConnectWithoutWishlistInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutWishlistInputObjectSchema,
CartItemUncheckedCreateWithoutWishlistInputObjectSchema])
});
