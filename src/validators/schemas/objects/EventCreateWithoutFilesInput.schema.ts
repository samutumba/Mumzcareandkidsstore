// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateparticipantsIDInputObjectSchema } from '../internals';;
import { AdminCreateNestedManyWithoutEventsInputObjectSchema } from '../internals';

export const EventCreateWithoutFilesInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  completed: Yup.boolean(),  description: Yup.string().required(),  participantsID: Yup.mixed().oneOfSchemas([EventCreateparticipantsIDInputObjectSchema,
Yup.array().of(Yup.string())]),  participants: AdminCreateNestedManyWithoutEventsInputObjectSchema,  startDate: Yup.date().required(),  title: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
