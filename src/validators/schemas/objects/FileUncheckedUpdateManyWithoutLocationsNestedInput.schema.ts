// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUpsertWithWhereUniqueWithoutLocationsInputObjectSchema } from '../internals';;
import { FileCreateManyLocationsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithWhereUniqueWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUpdateManyWithWhereWithoutLocationsInputObjectSchema } from '../internals';;
import { FileScalarWhereInputObjectSchema } from '../internals';

export const FileUncheckedUpdateManyWithoutLocationsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutLocationsInputObjectSchema,
Yup.array().of(FileCreateWithoutLocationsInputObjectSchema),
FileUncheckedCreateWithoutLocationsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutLocationsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutLocationsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutLocationsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([FileUpsertWithWhereUniqueWithoutLocationsInputObjectSchema,
Yup.array().of(FileUpsertWithWhereUniqueWithoutLocationsInputObjectSchema)]),  createMany: FileCreateManyLocationsInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([FileUpdateWithWhereUniqueWithoutLocationsInputObjectSchema,
Yup.array().of(FileUpdateWithWhereUniqueWithoutLocationsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([FileUpdateManyWithWhereWithoutLocationsInputObjectSchema,
Yup.array().of(FileUpdateManyWithWhereWithoutLocationsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([FileScalarWhereInputObjectSchema,
Yup.array().of(FileScalarWhereInputObjectSchema)])
});
