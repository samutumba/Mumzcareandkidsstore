// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const CartItemCreateOrConnectWithoutSalesInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutSalesInputObjectSchema,
CartItemUncheckedCreateWithoutSalesInputObjectSchema])
});
