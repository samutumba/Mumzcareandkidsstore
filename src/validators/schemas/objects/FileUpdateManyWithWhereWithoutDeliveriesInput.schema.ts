// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileScalarWhereInputObjectSchema } from '../internals';;
import { FileUpdateManyMutationInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateManyWithoutDocumentsInputObjectSchema } from '../internals';

export const FileUpdateManyWithWhereWithoutDeliveriesInputObjectSchema = Yup.object({
    where: FileScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateManyMutationInputObjectSchema,
FileUncheckedUpdateManyWithoutDocumentsInputObjectSchema])
});
