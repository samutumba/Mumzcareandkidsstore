import * as Yup from 'yup';
import { InquiryWhereInputObjectSchema, InquiryOrderByWithAggregationInputObjectSchema, InquiryScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { InquiryScalarFieldEnumSchema } from './internals'

export const InquiryGroupBySchema = Yup.object({ where: InquiryWhereInputObjectSchema, orderBy: InquiryOrderByWithAggregationInputObjectSchema, having: InquiryScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(InquiryScalarFieldEnumSchema).required()  }).required()