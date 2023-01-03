// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutPickupsInputObjectSchema } from '../internals';;
import { FileCreateManyPickupsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';

export const FileCreateNestedManyWithoutPickupsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutPickupsInputObjectSchema,
Yup.array().of(FileCreateWithoutPickupsInputObjectSchema),
FileUncheckedCreateWithoutPickupsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutPickupsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutPickupsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutPickupsInputObjectSchema)]),  createMany: FileCreateManyPickupsInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)])
});
