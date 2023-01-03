// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';

export const CartItemCreateOrConnectWithoutProductInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutProductInputObjectSchema,
CartItemUncheckedCreateWithoutProductInputObjectSchema])
});
