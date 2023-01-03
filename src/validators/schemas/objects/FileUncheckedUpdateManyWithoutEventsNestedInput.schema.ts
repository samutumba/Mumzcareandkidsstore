// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutEventsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { FileUpsertWithWhereUniqueWithoutEventsInputObjectSchema } from '../internals';;
import { FileCreateManyEventsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithWhereUniqueWithoutEventsInputObjectSchema } from '../internals';;
import { FileUpdateManyWithWhereWithoutEventsInputObjectSchema } from '../internals';;
import { FileScalarWhereInputObjectSchema } from '../internals';

export const FileUncheckedUpdateManyWithoutEventsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutEventsInputObjectSchema,
Yup.array().of(FileCreateWithoutEventsInputObjectSchema),
FileUncheckedCreateWithoutEventsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutEventsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutEventsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutEventsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([FileUpsertWithWhereUniqueWithoutEventsInputObjectSchema,
Yup.array().of(FileUpsertWithWhereUniqueWithoutEventsInputObjectSchema)]),  createMany: FileCreateManyEventsInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([FileUpdateWithWhereUniqueWithoutEventsInputObjectSchema,
Yup.array().of(FileUpdateWithWhereUniqueWithoutEventsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([FileUpdateManyWithWhereWithoutEventsInputObjectSchema,
Yup.array().of(FileUpdateManyWithWhereWithoutEventsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([FileScalarWhereInputObjectSchema,
Yup.array().of(FileScalarWhereInputObjectSchema)])
});
