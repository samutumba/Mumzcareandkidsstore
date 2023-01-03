// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereInputObjectSchema } from '../internals';

export const PickupRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([PickupWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([PickupWhereInputObjectSchema])
});
