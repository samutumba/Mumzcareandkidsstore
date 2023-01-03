// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SessionMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  expires: SortOrderSchema,  session: SortOrderSchema
});
