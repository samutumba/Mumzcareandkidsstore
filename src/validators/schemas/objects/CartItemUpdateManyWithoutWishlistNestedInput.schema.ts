// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemCreateManyWishlistInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemUpdateManyWithWhereWithoutWishlistInputObjectSchema } from '../internals';;
import { CartItemScalarWhereInputObjectSchema } from '../internals';

export const CartItemUpdateManyWithoutWishlistNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemCreateWithoutWishlistInputObjectSchema),
CartItemUncheckedCreateWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutWishlistInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutWishlistInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CartItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema)]),  createMany: CartItemCreateManyWishlistInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemUpdateWithWhereUniqueWithoutWishlistInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CartItemUpdateManyWithWhereWithoutWishlistInputObjectSchema,
Yup.array().of(CartItemUpdateManyWithWhereWithoutWishlistInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CartItemScalarWhereInputObjectSchema,
Yup.array().of(CartItemScalarWhereInputObjectSchema)])
});
