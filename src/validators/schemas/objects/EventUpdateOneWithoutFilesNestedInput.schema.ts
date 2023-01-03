// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutFilesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutFilesInputObjectSchema } from '../internals';;
import { EventUpsertWithoutFilesInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutFilesInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutFilesInputObjectSchema } from '../internals';

export const EventUpdateOneWithoutFilesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutFilesInputObjectSchema,
EventUncheckedCreateWithoutFilesInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutFilesInputObjectSchema,  upsert: EventUpsertWithoutFilesInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutFilesInputObjectSchema,
EventUncheckedUpdateWithoutFilesInputObjectSchema])
});
