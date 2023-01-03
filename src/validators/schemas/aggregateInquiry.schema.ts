import * as Yup from 'yup';
import { InquiryWhereInputObjectSchema, InquiryOrderByWithRelationInputObjectSchema, InquiryWhereUniqueInputObjectSchema } from './internals'

export const InquiryAggregateSchema = Yup.object({ where: InquiryWhereInputObjectSchema, orderBy: InquiryOrderByWithRelationInputObjectSchema, cursor: InquiryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()