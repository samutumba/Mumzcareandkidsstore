// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemScalarWhereInputObjectSchema } from '../internals';;
import { CartItemUpdateManyMutationInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from '../internals';

export const CartItemUpdateManyWithWhereWithoutCartInputObjectSchema = Yup.object({
    where: CartItemScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartItemUpdateManyMutationInputObjectSchema,
CartItemUncheckedUpdateManyWithoutItemsInputObjectSchema])
});
