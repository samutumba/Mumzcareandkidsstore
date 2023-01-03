// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackUncheckedCreateNestedManyWithoutAdminInputObjectSchema } from '../internals';;
import { EventUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema } from '../internals';;
import { AdminCreateeventsIdInputObjectSchema } from '../internals';

export const AdminUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  createdAt: Yup.date(),  email: Yup.string().required(),  employed: Yup.boolean(),  name: Yup.string().required(),  password: Yup.string().required(),  phone: Yup.string().required(),  role: Yup.string().required(),  updatedAt: Yup.date(),  filesId: Yup.mixed().oneOfSchemas([Yup.string()]),  feedbacks: FeedbackUncheckedCreateNestedManyWithoutAdminInputObjectSchema,  events: EventUncheckedCreateNestedManyWithoutParticipantsInputObjectSchema,  eventsId: Yup.mixed().oneOfSchemas([AdminCreateeventsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
