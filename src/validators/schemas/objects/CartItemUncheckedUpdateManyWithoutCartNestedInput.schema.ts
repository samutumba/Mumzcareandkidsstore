// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUpsertWithWhereUniqueWithoutCartInputObjectSchema } from '../internals';;
import { CartItemCreateManyCartInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithWhereUniqueWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUpdateManyWithWhereWithoutCartInputObjectSchema } from '../internals';;
import { CartItemScalarWhereInputObjectSchema } from '../internals';

export const CartItemUncheckedUpdateManyWithoutCartNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutCartInputObjectSchema,
Yup.array().of(CartItemCreateWithoutCartInputObjectSchema),
CartItemUncheckedCreateWithoutCartInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutCartInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutCartInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutCartInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CartItemUpsertWithWhereUniqueWithoutCartInputObjectSchema,
Yup.array().of(CartItemUpsertWithWhereUniqueWithoutCartInputObjectSchema)]),  createMany: CartItemCreateManyCartInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithWhereUniqueWithoutCartInputObjectSchema,
Yup.array().of(CartItemUpdateWithWhereUniqueWithoutCartInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CartItemUpdateManyWithWhereWithoutCartInputObjectSchema,
Yup.array().of(CartItemUpdateManyWithWhereWithoutCartInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CartItemScalarWhereInputObjectSchema,
Yup.array().of(CartItemScalarWhereInputObjectSchema)])
});
