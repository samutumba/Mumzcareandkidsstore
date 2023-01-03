// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUpdateManyWithWhereWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventScalarWhereInputObjectSchema } from '../internals';

export const EventUncheckedUpdateManyWithoutParticipantsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutParticipantsInputObjectSchema,
Yup.array().of(EventCreateWithoutParticipantsInputObjectSchema),
EventUncheckedCreateWithoutParticipantsInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutParticipantsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutParticipantsInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutParticipantsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([EventUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema,
Yup.array().of(EventUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([EventUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema,
Yup.array().of(EventUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([EventUpdateManyWithWhereWithoutParticipantsInputObjectSchema,
Yup.array().of(EventUpdateManyWithWhereWithoutParticipantsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([EventScalarWhereInputObjectSchema,
Yup.array().of(EventScalarWhereInputObjectSchema)])
});
