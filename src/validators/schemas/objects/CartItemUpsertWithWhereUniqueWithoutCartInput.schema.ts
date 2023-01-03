// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereUniqueInputObjectSchema } from '../internals';;
import { CartItemUpdateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemCreateWithoutCartInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateWithoutCartInputObjectSchema } from '../internals';

export const CartItemUpsertWithWhereUniqueWithoutCartInputObjectSchema = Yup.object({
    where: CartItemWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CartItemUpdateWithoutCartInputObjectSchema,
CartItemUncheckedUpdateWithoutCartInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CartItemCreateWithoutCartInputObjectSchema,
CartItemUncheckedCreateWithoutCartInputObjectSchema])
});
