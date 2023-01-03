// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const PickupCreateManyUserInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  service: Yup.string().required(),  status: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  contact: Yup.string().required(),  note: Yup.string().required(),  locationsId: Yup.string().required()
});
