// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateNestedManyWithoutItemsInputObjectSchema } from '../internals';;
import { ItemCreatesalesIdInputObjectSchema } from '../internals';

export const ItemCreateWithoutProductInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  color: Yup.string().required(),  material: Yup.string().required(),  size: Yup.string().required(),  model: Yup.string().required(),  sold: Yup.boolean(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  sales: SaleCreateNestedManyWithoutItemsInputObjectSchema,  salesId: Yup.mixed().oneOfSchemas([ItemCreatesalesIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
