// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereInputObjectSchema } from '../internals';

export const PickupListRelationFilterObjectSchema = Yup.object({
    every: PickupWhereInputObjectSchema,  some: PickupWhereInputObjectSchema,  none: PickupWhereInputObjectSchema
});
