// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const CartItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutSalesInputObjectSchema,
CartItemUncheckedUpdateWithoutSalesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutSalesInputObjectSchema,
CartItemUncheckedCreateWithoutSalesInputObjectSchema])
});
