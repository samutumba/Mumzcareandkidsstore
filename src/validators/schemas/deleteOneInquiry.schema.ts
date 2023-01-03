import * as Yup from 'yup';
import { InquiryWhereUniqueInputObjectSchema } from './internals'

export const InquiryDeleteOneSchema = Yup.object({ where: InquiryWhereUniqueInputObjectSchema  }).required()