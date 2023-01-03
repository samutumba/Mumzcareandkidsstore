// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';

export const FileUpdateWithWhereUniqueWithoutEventsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateWithoutEventsInputObjectSchema,
FileUncheckedUpdateWithoutEventsInputObjectSchema])
});
