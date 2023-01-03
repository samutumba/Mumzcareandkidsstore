// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUpsertWithWhereUniqueWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileCreateManyDeliveriesInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithWhereUniqueWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUpdateManyWithWhereWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileScalarWhereInputObjectSchema } from '../internals';

export const FileUpdateManyWithoutDeliveriesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileCreateWithoutDeliveriesInputObjectSchema),
FileUncheckedCreateWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutDeliveriesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutDeliveriesInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([FileUpsertWithWhereUniqueWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileUpsertWithWhereUniqueWithoutDeliveriesInputObjectSchema)]),  createMany: FileCreateManyDeliveriesInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([FileUpdateWithWhereUniqueWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileUpdateWithWhereUniqueWithoutDeliveriesInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([FileUpdateManyWithWhereWithoutDeliveriesInputObjectSchema,
Yup.array().of(FileUpdateManyWithWhereWithoutDeliveriesInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([FileScalarWhereInputObjectSchema,
Yup.array().of(FileScalarWhereInputObjectSchema)])
});
