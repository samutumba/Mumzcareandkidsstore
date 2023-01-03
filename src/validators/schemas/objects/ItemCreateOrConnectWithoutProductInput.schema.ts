// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';

export const ItemCreateOrConnectWithoutProductInputObjectSchema = Yup.object({
    where: ItemWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ItemCreateWithoutProductInputObjectSchema,
ItemUncheckedCreateWithoutProductInputObjectSchema])
});
