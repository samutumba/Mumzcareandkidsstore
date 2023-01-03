// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateparticipantsIDInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateNestedManyWithoutEventsInputObjectSchema } from '../internals';

export const EventUncheckedCreateWithoutFilesInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  completed: Yup.boolean(),  description: Yup.string().required(),  participantsID: Yup.mixed().oneOfSchemas([EventCreateparticipantsIDInputObjectSchema,
Yup.array().of(Yup.string())]),  participants: AdminUncheckedCreateNestedManyWithoutEventsInputObjectSchema,  startDate: Yup.date().required(),  title: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
