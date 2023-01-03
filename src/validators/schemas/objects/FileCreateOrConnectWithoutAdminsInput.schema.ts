// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileCreateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutAdminsInputObjectSchema } from '../internals';

export const FileCreateOrConnectWithoutAdminsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FileCreateWithoutAdminsInputObjectSchema,
FileUncheckedCreateWithoutAdminsInputObjectSchema])
});
