// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const DeliveryLocationOrderByInputObjectSchema = Yup.object({
    lgt: SortOrderSchema,  lat: SortOrderSchema,  note: SortOrderSchema,  district: SortOrderSchema,  town: SortOrderSchema,  street: SortOrderSchema,  country: SortOrderSchema
});
