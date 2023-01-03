// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateeventsIdInputObjectSchema } from '../internals';

export const AdminCreateManyProfileInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  createdAt: Yup.date(),  email: Yup.string().required(),  employed: Yup.boolean(),  name: Yup.string().required(),  password: Yup.string().required(),  phone: Yup.string().required(),  role: Yup.string().required(),  updatedAt: Yup.date(),  eventsId: Yup.mixed().oneOfSchemas([AdminCreateeventsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
