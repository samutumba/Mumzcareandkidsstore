// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileCreateManyDeliveriesInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';

export const FileUncheckedCreateNestedManyWithoutDeliveriesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileCreateWithoutDeliveriesInputObjectSchema),
FileUncheckedCreateWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutDeliveriesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutDeliveriesInputObjectSchema)]),  createMany: FileCreateManyDeliveriesInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)])
});
