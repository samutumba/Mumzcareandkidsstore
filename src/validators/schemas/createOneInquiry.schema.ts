import * as Yup from 'yup';
import { InquiryCreateInputObjectSchema } from './internals'

export const InquiryCreateSchema = Yup.object({ data: InquiryCreateInputObjectSchema  }).required()