// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryWhereInputObjectSchema } from '../internals';

export const InquiryRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([InquiryWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([InquiryWhereInputObjectSchema])
});
