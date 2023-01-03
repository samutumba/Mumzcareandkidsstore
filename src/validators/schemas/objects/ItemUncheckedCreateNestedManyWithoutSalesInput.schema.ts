// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { ItemWhereUniqueInputObjectSchema } from '../internals';

export const ItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ItemCreateWithoutSalesInputObjectSchema,
Yup.array().of(ItemCreateWithoutSalesInputObjectSchema),
ItemUncheckedCreateWithoutSalesInputObjectSchema,
Yup.array().of(ItemUncheckedCreateWithoutSalesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ItemCreateOrConnectWithoutSalesInputObjectSchema,
Yup.array().of(ItemCreateOrConnectWithoutSalesInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)])
});
