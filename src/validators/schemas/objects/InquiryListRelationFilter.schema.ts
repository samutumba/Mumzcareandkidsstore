// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryWhereInputObjectSchema } from '../internals';

export const InquiryListRelationFilterObjectSchema = Yup.object({
    every: InquiryWhereInputObjectSchema,  some: InquiryWhereInputObjectSchema,  none: InquiryWhereInputObjectSchema
});
