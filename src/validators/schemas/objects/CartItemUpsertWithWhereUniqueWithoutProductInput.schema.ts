// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';

export const CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutProductInputObjectSchema,
CartItemUncheckedUpdateWithoutProductInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutProductInputObjectSchema,
CartItemUncheckedCreateWithoutProductInputObjectSchema])
});
