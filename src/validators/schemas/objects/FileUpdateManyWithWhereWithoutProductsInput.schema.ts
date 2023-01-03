// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileScalarWhereInputObjectSchema } from '../internals';;
import { FileUpdateManyMutationInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateManyWithoutImagesInputObjectSchema } from '../internals';

export const FileUpdateManyWithWhereWithoutProductsInputObjectSchema = Yup.object({
    where: FileScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateManyMutationInputObjectSchema,
FileUncheckedUpdateManyWithoutImagesInputObjectSchema])
});
