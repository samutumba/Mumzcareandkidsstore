// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SessionCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  expires: SortOrderSchema,  session: SortOrderSchema
});
