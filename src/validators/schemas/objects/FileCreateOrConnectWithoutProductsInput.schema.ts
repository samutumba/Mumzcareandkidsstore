// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileCreateWithoutProductsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';

export const FileCreateOrConnectWithoutProductsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FileCreateWithoutProductsInputObjectSchema,
FileUncheckedCreateWithoutProductsInputObjectSchema])
});
