// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';

export const FileCreateOrConnectWithoutPickupsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FileCreateWithoutPickupsInputObjectSchema,
FileUncheckedCreateWithoutPickupsInputObjectSchema])
});
