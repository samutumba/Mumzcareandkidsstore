// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUpdateWithoutFilesInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutFilesInputObjectSchema } from '../internals';;
import { EventCreateWithoutFilesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';

export const EventUpsertWithoutFilesInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([EventUpdateWithoutFilesInputObjectSchema,
EventUncheckedUpdateWithoutFilesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([EventCreateWithoutFilesInputObjectSchema,
EventUncheckedCreateWithoutFilesInputObjectSchema])
});
