// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutCartInputObjectSchema } from '../internals';;
import { CartItemCreateManyCartInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';

export const CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutCartInputObjectSchema,
Yup.array().of(CartItemCreateWithoutCartInputObjectSchema),
CartItemUncheckedCreateWithoutCartInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutCartInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutCartInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutCartInputObjectSchema)]),  createMany: CartItemCreateManyCartInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)])
});
