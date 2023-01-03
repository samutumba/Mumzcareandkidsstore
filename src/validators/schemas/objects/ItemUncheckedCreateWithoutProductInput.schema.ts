// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleUncheckedCreateNestedManyWithoutItemsInputObjectSchema } from '../internals';;
import { ItemCreatesalesIdInputObjectSchema } from '../internals';

export const ItemUncheckedCreateWithoutProductInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  color: Yup.string().required(),  material: Yup.string().required(),  size: Yup.string().required(),  model: Yup.string().required(),  sold: Yup.boolean(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  sales: SaleUncheckedCreateNestedManyWithoutItemsInputObjectSchema,  salesId: Yup.mixed().oneOfSchemas([ItemCreatesalesIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
