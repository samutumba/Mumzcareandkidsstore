// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from '../internals';

export const EventUpsertWithWhereUniqueWithoutParticipantsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutParticipantsInputObjectSchema,
EventUncheckedUpdateWithoutParticipantsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([EventCreateWithoutParticipantsInputObjectSchema,
EventUncheckedCreateWithoutParticipantsInputObjectSchema])
});
