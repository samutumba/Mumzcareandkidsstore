import * as Yup from 'yup';
import { InquiryUpdateInputObjectSchema, InquiryWhereUniqueInputObjectSchema } from './internals'

export const InquiryUpdateOneSchema = Yup.object({ data: InquiryUpdateInputObjectSchema, where: InquiryWhereUniqueInputObjectSchema  }).required()