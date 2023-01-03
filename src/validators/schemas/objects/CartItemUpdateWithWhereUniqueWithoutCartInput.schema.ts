// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutCartInputObjectSchema } from '../internals';

export const CartItemUpdateWithWhereUniqueWithoutCartInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutCartInputObjectSchema,
CartItemUncheckedUpdateWithoutCartInputObjectSchema])
});
