// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutProductInputObjectSchema } from '../internals';

export const CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutProductInputObjectSchema,
CartItemUncheckedUpdateWithoutProductInputObjectSchema])
});
