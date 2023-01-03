// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventCreateWithoutFilesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';

export const EventCreateOrConnectWithoutFilesInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([EventCreateWithoutFilesInputObjectSchema,
EventUncheckedCreateWithoutFilesInputObjectSchema])
});
