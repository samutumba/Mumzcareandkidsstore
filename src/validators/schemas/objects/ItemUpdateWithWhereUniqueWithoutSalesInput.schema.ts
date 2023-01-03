// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';

export const ItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema = Yup.object({
    where: ItemWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ItemUpdateWithoutSalesInputObjectSchema,
ItemUncheckedUpdateWithoutSalesInputObjectSchema])
});
