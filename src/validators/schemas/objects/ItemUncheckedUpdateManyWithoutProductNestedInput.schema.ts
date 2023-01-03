// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';;
import { ItemCreateOrConnectWithoutProductInputObjectSchema } from '../internals';;
import { ItemUpsertWithWhereUniqueWithoutProductInputObjectSchema } from '../internals';;
import { ItemCreateManyProductInputEnvelopeObjectSchema } from '../internals';;
import { ItemWhereUniqueInputObjectSchema } from '../internals';;
import { ItemUpdateWithWhereUniqueWithoutProductInputObjectSchema } from '../internals';;
import { ItemUpdateManyWithWhereWithoutProductInputObjectSchema } from '../internals';;
import { ItemScalarWhereInputObjectSchema } from '../internals';

export const ItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ItemCreateWithoutProductInputObjectSchema,
Yup.array().of(ItemCreateWithoutProductInputObjectSchema),
ItemUncheckedCreateWithoutProductInputObjectSchema,
Yup.array().of(ItemUncheckedCreateWithoutProductInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ItemCreateOrConnectWithoutProductInputObjectSchema,
Yup.array().of(ItemCreateOrConnectWithoutProductInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ItemUpsertWithWhereUniqueWithoutProductInputObjectSchema,
Yup.array().of(ItemUpsertWithWhereUniqueWithoutProductInputObjectSchema)]),  createMany: ItemCreateManyProductInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ItemUpdateWithWhereUniqueWithoutProductInputObjectSchema,
Yup.array().of(ItemUpdateWithWhereUniqueWithoutProductInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ItemUpdateManyWithWhereWithoutProductInputObjectSchema,
Yup.array().of(ItemUpdateManyWithWhereWithoutProductInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ItemScalarWhereInputObjectSchema,
Yup.array().of(ItemScalarWhereInputObjectSchema)])
});
