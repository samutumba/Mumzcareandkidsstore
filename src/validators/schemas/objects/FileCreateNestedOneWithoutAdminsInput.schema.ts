// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutAdminsInputObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';

export const FileCreateNestedOneWithoutAdminsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutAdminsInputObjectSchema,
FileUncheckedCreateWithoutAdminsInputObjectSchema]),  connectOrCreate: FileCreateOrConnectWithoutAdminsInputObjectSchema,  connect: FileWhereUniqueInputObjectSchema
});
