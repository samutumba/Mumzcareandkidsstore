// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutProductsInputObjectSchema } from '../internals';

export const FileUpdateWithWhereUniqueWithoutProductsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateWithoutProductsInputObjectSchema,
FileUncheckedUpdateWithoutProductsInputObjectSchema])
});
