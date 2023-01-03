// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutProductInputObjectSchema } from '../internals';;
import { CartItemCreateManyProductInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';

export const CartItemCreateNestedManyWithoutProductInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutProductInputObjectSchema,
Yup.array().of(CartItemCreateWithoutProductInputObjectSchema),
CartItemUncheckedCreateWithoutProductInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutProductInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutProductInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutProductInputObjectSchema)]),  createMany: CartItemCreateManyProductInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)])
});
