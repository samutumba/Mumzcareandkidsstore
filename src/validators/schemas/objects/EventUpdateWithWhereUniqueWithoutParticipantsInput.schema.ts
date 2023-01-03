// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutParticipantsInputObjectSchema } from '../internals';

export const EventUpdateWithWhereUniqueWithoutParticipantsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([EventUpdateWithoutParticipantsInputObjectSchema,
EventUncheckedUpdateWithoutParticipantsInputObjectSchema])
});
