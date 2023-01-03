// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { FileCreateWithoutProductsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';

export const FileUpsertWithWhereUniqueWithoutProductsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FileUpdateWithoutProductsInputObjectSchema,
FileUncheckedUpdateWithoutProductsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FileCreateWithoutProductsInputObjectSchema,
FileUncheckedCreateWithoutProductsInputObjectSchema])
});
