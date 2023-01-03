// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemScalarWhereInputObjectSchema } from '../internals';;
import { CartItemUpdateManyMutationInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateManyWithoutProductsInputObjectSchema } from '../internals';

export const CartItemUpdateManyWithWhereWithoutSalesInputObjectSchema = Yup.object({
    where: CartItemScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartItemUpdateManyMutationInputObjectSchema,
CartItemUncheckedUpdateManyWithoutProductsInputObjectSchema])
});
