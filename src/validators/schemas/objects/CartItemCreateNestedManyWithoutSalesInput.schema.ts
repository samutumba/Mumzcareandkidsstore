// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemCreateManySalesInputEnvelopeObjectSchema } from '../internals';;
import { CartItemWhereUniqueInputObjectSchema } from '../internals';

export const CartItemCreateNestedManyWithoutSalesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutSalesInputObjectSchema,
Yup.array().of(CartItemCreateWithoutSalesInputObjectSchema),
CartItemUncheckedCreateWithoutSalesInputObjectSchema,
Yup.array().of(CartItemUncheckedCreateWithoutSalesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartItemCreateOrConnectWithoutSalesInputObjectSchema,
Yup.array().of(CartItemCreateOrConnectWithoutSalesInputObjectSchema)]),  createMany: CartItemCreateManySalesInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CartItemWhereUniqueInputObjectSchema,
Yup.array().of(CartItemWhereUniqueInputObjectSchema)])
});
