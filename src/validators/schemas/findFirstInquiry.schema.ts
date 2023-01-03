import * as Yup from 'yup';
import { InquiryWhereInputObjectSchema, InquiryOrderByWithRelationInputObjectSchema, InquiryWhereUniqueInputObjectSchema } from './internals';
import { InquiryScalarFieldEnumSchema } from './internals'

export const InquiryFindFirstSchema = Yup.object({ where: InquiryWhereInputObjectSchema, orderBy: InquiryOrderByWithRelationInputObjectSchema, cursor: InquiryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(InquiryScalarFieldEnumSchema) }).required()