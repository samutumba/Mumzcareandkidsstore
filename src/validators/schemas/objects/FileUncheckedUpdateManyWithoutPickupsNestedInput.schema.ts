// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUpsertWithWhereUniqueWithoutPickupsInputObjectSchema } from '../internals';;
import { FileCreateManyPickupsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithWhereUniqueWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUpdateManyWithWhereWithoutPickupsInputObjectSchema } from '../internals';;
import { FileScalarWhereInputObjectSchema } from '../internals';

export const FileUncheckedUpdateManyWithoutPickupsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutPickupsInputObjectSchema,
Yup.array().of(FileCreateWithoutPickupsInputObjectSchema),
FileUncheckedCreateWithoutPickupsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutPickupsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutPickupsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutPickupsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([FileUpsertWithWhereUniqueWithoutPickupsInputObjectSchema,
Yup.array().of(FileUpsertWithWhereUniqueWithoutPickupsInputObjectSchema)]),  createMany: FileCreateManyPickupsInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([FileUpdateWithWhereUniqueWithoutPickupsInputObjectSchema,
Yup.array().of(FileUpdateWithWhereUniqueWithoutPickupsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([FileUpdateManyWithWhereWithoutPickupsInputObjectSchema,
Yup.array().of(FileUpdateManyWithWhereWithoutPickupsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([FileScalarWhereInputObjectSchema,
Yup.array().of(FileScalarWhereInputObjectSchema)])
});
