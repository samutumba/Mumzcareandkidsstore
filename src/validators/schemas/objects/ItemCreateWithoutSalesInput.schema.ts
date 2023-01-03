// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateNestedOneWithoutItemsInputObjectSchema } from '../internals';;
import { ItemCreatesalesIdInputObjectSchema } from '../internals';

export const ItemCreateWithoutSalesInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  product: ProductCreateNestedOneWithoutItemsInputObjectSchema,  color: Yup.string().required(),  material: Yup.string().required(),  size: Yup.string().required(),  model: Yup.string().required(),  sold: Yup.boolean(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  salesId: Yup.mixed().oneOfSchemas([ItemCreatesalesIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
