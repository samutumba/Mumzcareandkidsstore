// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutAdminsInputObjectSchema } from '../internals';;
import { FileUpsertWithoutAdminsInputObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutAdminsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutAdminsInputObjectSchema } from '../internals';

export const FileUpdateOneWithoutAdminsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutAdminsInputObjectSchema,
FileUncheckedCreateWithoutAdminsInputObjectSchema]),  connectOrCreate: FileCreateOrConnectWithoutAdminsInputObjectSchema,  upsert: FileUpsertWithoutAdminsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: FileWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FileUpdateWithoutAdminsInputObjectSchema,
FileUncheckedUpdateWithoutAdminsInputObjectSchema])
});
