// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemCreateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { ItemCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema } from '../internals';;
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUpdateManyWithWhereWithoutSalesInputObjectSchema } from '../internals';;
import { ItemScalarWhereInputObjectSchema } from '../internals';

export const ItemUncheckedUpdateManyWithoutSalesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ItemCreateWithoutSalesInputObjectSchema,
Yup.array().of(ItemCreateWithoutSalesInputObjectSchema),
ItemUncheckedCreateWithoutSalesInputObjectSchema,
Yup.array().of(ItemUncheckedCreateWithoutSalesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ItemCreateOrConnectWithoutSalesInputObjectSchema,
Yup.array().of(ItemCreateOrConnectWithoutSalesInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema,
Yup.array().of(ItemUpsertWithWhereUniqueWithoutSalesInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema,
Yup.array().of(ItemUpdateWithWhereUniqueWithoutSalesInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ItemUpdateManyWithWhereWithoutSalesInputObjectSchema,
Yup.array().of(ItemUpdateManyWithWhereWithoutSalesInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ItemScalarWhereInputObjectSchema,
Yup.array().of(ItemScalarWhereInputObjectSchema)])
});
