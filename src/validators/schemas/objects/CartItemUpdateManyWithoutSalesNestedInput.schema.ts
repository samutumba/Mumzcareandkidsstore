// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemCreateManySalesInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUpdateManyWithWhereWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemScalarWhereInputObjectSchema } from '../internals';

export const CartItemUpdateManyWithoutSalesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutSalesInputObjectSchema,
Yup.array().of(CartItemCreateWithoutSalesInputObjectSchema),
CartItemUncheckedCreateWithoutSalesInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutSalesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutSalesInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutSalesInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CartItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema,
Yup.array().of(CartItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema)]),  createMany: CartItemCreateManySalesInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema,
Yup.array().of(CartItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CartItemUpdateManyWithWhereWithoutSalesInputObjectSchema,
Yup.array().of(CartItemUpdateManyWithWhereWithoutSalesInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CartItemScalarWhereInputObjectSchema,
Yup.array().of(CartItemScalarWhereInputObjectSchema)])
});
