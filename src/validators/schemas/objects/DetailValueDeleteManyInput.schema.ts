// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueWhereInputObjectSchema } from '../internals';

export const DetailValueDeleteManyInputObjectSchema = Yup.object({
    where: DetailValueWhereInputObjectSchema
});
