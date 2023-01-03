// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateitemsIdInputObjectSchema } from '../internals';

export const SaleCreateManyInputObjectSchema = Yup.object({
    id: Yup.string(),  reference: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  usersId: Yup.mixed().oneOfSchemas([Yup.string()]),  itemsId: Yup.mixed().oneOfSchemas([SaleCreateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
