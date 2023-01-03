// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const ItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema = Yup.object({
    where: ItemWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ItemUpdateWithoutSalesInputObjectSchema,
ItemUncheckedUpdateWithoutSalesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ItemCreateWithoutSalesInputObjectSchema,
ItemUncheckedCreateWithoutSalesInputObjectSchema])
});
