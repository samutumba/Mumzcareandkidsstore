// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateparticipantsIDInputObjectSchema } from '../internals';

export const EventCreateManyInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  completed: Yup.boolean(),  description: Yup.string().required(),  participantsID: Yup.mixed().oneOfSchemas([EventCreateparticipantsIDInputObjectSchema,
Yup.array().of(Yup.string())]),  startDate: Yup.date().required(),  title: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
