// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';

export const FileUpsertWithWhereUniqueWithoutPickupsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FileUpdateWithoutPickupsInputObjectSchema,
FileUncheckedUpdateWithoutPickupsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FileCreateWithoutPickupsInputObjectSchema,
FileUncheckedCreateWithoutPickupsInputObjectSchema])
});
