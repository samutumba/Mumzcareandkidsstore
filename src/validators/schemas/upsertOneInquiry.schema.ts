import * as Yup from 'yup';
import { InquiryWhereUniqueInputObjectSchema, InquiryCreateInputObjectSchema, InquiryUpdateInputObjectSchema } from './internals'

export const InquiryUpsertSchema = Yup.object({ where: InquiryWhereUniqueInputObjectSchema, data: InquiryCreateInputObjectSchema, update: InquiryUpdateInputObjectSchema  }).required()