// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutCartInputObjectSchema } from '../internals';

export const CartItemCreateOrConnectWithoutCartInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutCartInputObjectSchema,
CartItemUncheckedCreateWithoutCartInputObjectSchema])
});
