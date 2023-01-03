// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileCreateWithoutEventsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const FileCreateOrConnectWithoutEventsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FileCreateWithoutEventsInputObjectSchema,
FileUncheckedCreateWithoutEventsInputObjectSchema])
});
