// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutPickupsInputObjectSchema } from '../internals';

export const FileUpdateWithWhereUniqueWithoutPickupsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateWithoutPickupsInputObjectSchema,
FileUncheckedUpdateWithoutPickupsInputObjectSchema])
});
