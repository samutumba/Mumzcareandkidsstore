// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventCreateNestedManyWithoutParticipantsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutParticipantsInputObjectSchema,
Yup.array().of(EventCreateWithoutParticipantsInputObjectSchema),
EventUncheckedCreateWithoutParticipantsInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutParticipantsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutParticipantsInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutParticipantsInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)])
});
