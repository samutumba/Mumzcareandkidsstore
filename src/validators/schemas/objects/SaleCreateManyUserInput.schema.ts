// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateitemsIdInputObjectSchema } from '../internals';

export const SaleCreateManyUserInputObjectSchema = Yup.object({
    id: Yup.string(),  reference: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  itemsId: Yup.mixed().oneOfSchemas([SaleCreateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
