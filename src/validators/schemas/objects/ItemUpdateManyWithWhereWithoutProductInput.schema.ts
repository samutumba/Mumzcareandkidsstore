// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemScalarWhereInputObjectSchema } from '../internals';;
import { ItemUpdateManyMutationInputObjectSchema } from '../internals';;
import { ItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from '../internals';

export const ItemUpdateManyWithWhereWithoutProductInputObjectSchema = Yup.object({
    where: ItemScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ItemUpdateManyMutationInputObjectSchema,
ItemUncheckedUpdateManyWithoutItemsInputObjectSchema])
});
