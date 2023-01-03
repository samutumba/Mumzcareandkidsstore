// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema } from '../internals';;
import { CartItemCreateManyProductInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUpdateManyWithWhereWithoutProductInputObjectSchema } from '../internals';;
import { CartItemScalarWhereInputObjectSchema } from '../internals';

export const CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutProductInputObjectSchema,
Yup.array().of(CartItemCreateWithoutProductInputObjectSchema),
CartItemUncheckedCreateWithoutProductInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutProductInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutProductInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutProductInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
Yup.array().of(CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema)]),  createMany: CartItemCreateManyProductInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
Yup.array().of(CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CartItemUpdateManyWithWhereWithoutProductInputObjectSchema,
Yup.array().of(CartItemUpdateManyWithWhereWithoutProductInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CartItemScalarWhereInputObjectSchema,
Yup.array().of(CartItemScalarWhereInputObjectSchema)])
});
