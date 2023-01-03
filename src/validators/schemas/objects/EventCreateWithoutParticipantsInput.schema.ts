// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateNestedManyWithoutEventsInputObjectSchema } from '../internals';;
import { EventCreateparticipantsIDInputObjectSchema } from '../internals';

export const EventCreateWithoutParticipantsInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  files: FileCreateNestedManyWithoutEventsInputObjectSchema,  completed: Yup.boolean(),  description: Yup.string().required(),  participantsID: Yup.mixed().oneOfSchemas([EventCreateparticipantsIDInputObjectSchema,
Yup.array().of(Yup.string())]),  startDate: Yup.date().required(),  title: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
