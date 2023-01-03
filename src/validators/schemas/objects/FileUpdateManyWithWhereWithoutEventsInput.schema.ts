// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileScalarWhereInputObjectSchema } from '../internals';;
import { FileUpdateManyMutationInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateManyWithoutFilesInputObjectSchema } from '../internals';

export const FileUpdateManyWithWhereWithoutEventsInputObjectSchema = Yup.object({
    where: FileScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateManyMutationInputObjectSchema,
FileUncheckedUpdateManyWithoutFilesInputObjectSchema])
});
