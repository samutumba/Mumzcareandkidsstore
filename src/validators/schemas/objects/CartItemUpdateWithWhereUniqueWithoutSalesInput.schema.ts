// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';

export const CartItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutSalesInputObjectSchema,
CartItemUncheckedUpdateWithoutSalesInputObjectSchema])
});
