// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemUpdateWithoutProductInputObjectSchema } from '../internals';;
import { ItemUncheckedUpdateWithoutProductInputObjectSchema } from '../internals';;
import { ItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';

export const ItemUpsertWithWhereUniqueWithoutProductInputObjectSchema = Yup.object({
    where: ItemWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ItemUpdateWithoutProductInputObjectSchema,
ItemUncheckedUpdateWithoutProductInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ItemCreateWithoutProductInputObjectSchema,
ItemUncheckedCreateWithoutProductInputObjectSchema])
});
