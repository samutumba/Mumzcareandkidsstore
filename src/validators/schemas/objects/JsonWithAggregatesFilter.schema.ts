// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedJsonFilterObjectSchema } from '../internals';

export const JsonWithAggregatesFilterObjectSchema = Yup.object({
    _count: NestedIntFilterObjectSchema,  _min: NestedJsonFilterObjectSchema,  _max: NestedJsonFilterObjectSchema
});
