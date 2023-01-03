// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { FileCreateWithoutEventsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const FileUpsertWithWhereUniqueWithoutEventsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FileUpdateWithoutEventsInputObjectSchema,
FileUncheckedUpdateWithoutEventsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FileCreateWithoutEventsInputObjectSchema,
FileUncheckedCreateWithoutEventsInputObjectSchema])
});
