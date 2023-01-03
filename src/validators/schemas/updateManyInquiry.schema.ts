import * as Yup from 'yup';
import { InquiryUpdateManyMutationInputObjectSchema, InquiryWhereInputObjectSchema } from './internals'

export const InquiryUpdateManySchema = Yup.object({ data: InquiryUpdateManyMutationInputObjectSchema, where: InquiryWhereInputObjectSchema  }).required()