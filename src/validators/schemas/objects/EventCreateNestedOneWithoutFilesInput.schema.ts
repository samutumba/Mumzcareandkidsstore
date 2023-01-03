// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutFilesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutFilesInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventCreateNestedOneWithoutFilesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutFilesInputObjectSchema,
EventUncheckedCreateWithoutFilesInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutFilesInputObjectSchema,  connect: EventWhereUniqueInputObjectSchema
});
