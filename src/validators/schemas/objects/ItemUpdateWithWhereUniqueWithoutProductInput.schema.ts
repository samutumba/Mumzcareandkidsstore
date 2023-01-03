// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemUpdateWithoutProductInputObjectSchema } from '../internals';;
import { ItemUncheckedUpdateWithoutProductInputObjectSchema } from '../internals';

export const ItemUpdateWithWhereUniqueWithoutProductInputObjectSchema = Yup.object({
    where: ItemWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ItemUpdateWithoutProductInputObjectSchema,
ItemUncheckedUpdateWithoutProductInputObjectSchema])
});
