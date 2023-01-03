// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemScalarWhereInputObjectSchema } from '../internals';;
import { CartItemUpdateManyMutationInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateManyWithoutCartItemInputObjectSchema } from '../internals';

export const CartItemUpdateManyWithWhereWithoutProductInputObjectSchema = Yup.object({
    where: CartItemScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartItemUpdateManyMutationInputObjectSchema,
CartItemUncheckedUpdateManyWithoutCartItemInputObjectSchema])
});
