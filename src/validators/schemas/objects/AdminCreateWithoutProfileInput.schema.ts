// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackCreateNestedManyWithoutAdminInputObjectSchema } from '../internals';;
import { EventCreateNestedManyWithoutParticipantsInputObjectSchema } from '../internals';;
import { AdminCreateeventsIdInputObjectSchema } from '../internals';

export const AdminCreateWithoutProfileInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  createdAt: Yup.date(),  email: Yup.string().required(),  employed: Yup.boolean(),  name: Yup.string().required(),  password: Yup.string().required(),  phone: Yup.string().required(),  role: Yup.string().required(),  updatedAt: Yup.date(),  feedbacks: FeedbackCreateNestedManyWithoutAdminInputObjectSchema,  events: EventCreateNestedManyWithoutParticipantsInputObjectSchema,  eventsId: Yup.mixed().oneOfSchemas([AdminCreateeventsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
