// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const ItemCreateOrConnectWithoutSalesInputObjectSchema = Yup.object({
    where: ItemWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ItemCreateWithoutSalesInputObjectSchema,
ItemUncheckedCreateWithoutSalesInputObjectSchema])
});
