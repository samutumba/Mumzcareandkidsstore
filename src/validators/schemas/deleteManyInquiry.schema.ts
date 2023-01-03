import * as Yup from 'yup';
import { InquiryWhereInputObjectSchema } from './internals'

export const InquiryDeleteManySchema = Yup.object({ InquiryWhereInputObjectSchema  }).required()