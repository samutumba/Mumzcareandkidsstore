// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueWhereInputObjectSchema } from '../internals';;
import { DetailValueUpdateInputObjectSchema } from '../internals';

export const DetailValueUpdateManyInputObjectSchema = Yup.object({
    where: DetailValueWhereInputObjectSchema,  data: DetailValueUpdateInputObjectSchema
});
