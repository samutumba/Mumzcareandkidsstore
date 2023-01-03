import * as Yup from 'yup';
import { InquiryWhereUniqueInputObjectSchema } from './internals'

export const InquiryFindUniqueSchema = Yup.object({ where: InquiryWhereUniqueInputObjectSchema }).required()