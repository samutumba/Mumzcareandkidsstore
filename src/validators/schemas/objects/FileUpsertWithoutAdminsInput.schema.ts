// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileUpdateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileCreateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutAdminsInputObjectSchema } from '../internals';

export const FileUpsertWithoutAdminsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([FileUpdateWithoutAdminsInputObjectSchema,
FileUncheckedUpdateWithoutAdminsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FileCreateWithoutAdminsInputObjectSchema,
FileUncheckedCreateWithoutAdminsInputObjectSchema])
});
