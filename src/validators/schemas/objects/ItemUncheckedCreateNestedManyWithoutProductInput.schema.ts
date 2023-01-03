// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemCreateWithoutProductInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateWithoutProductInputObjectSchema } from '../internals';;
import { ItemCreateOrConnectWithoutProductInputObjectSchema } from '../internals';;
import { ItemCreateManyProductInputEnvelopeObjectSchema } from '../internals';;
import { ItemWhereUniqueInputObjectSchema } from '../internals';

export const ItemUncheckedCreateNestedManyWithoutProductInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ItemCreateWithoutProductInputObjectSchema,
Yup.array().of(ItemCreateWithoutProductInputObjectSchema),
ItemUncheckedCreateWithoutProductInputObjectSchema,
Yup.array().of(ItemUncheckedCreateWithoutProductInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ItemCreateOrConnectWithoutProductInputObjectSchema,
Yup.array().of(ItemCreateOrConnectWithoutProductInputObjectSchema)]),  createMany: ItemCreateManyProductInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ItemWhereUniqueInputObjectSchema,
Yup.array().of(ItemWhereUniqueInputObjectSchema)])
});
