// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemCreateManyWishlistInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';

export const CartItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemCreateWithoutWishlistInputObjectSchema),
CartItemUncheckedCreateWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutWishlistInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutWishlistInputObjectSchema)]),  createMany: CartItemCreateManyWishlistInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)])
});
