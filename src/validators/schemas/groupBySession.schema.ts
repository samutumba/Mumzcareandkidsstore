import * as Yup from 'yup';
import { SessionWhereInputObjectSchema, SessionOrderByWithAggregationInputObjectSchema, SessionScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { SessionScalarFieldEnumSchema } from './internals'

export const SessionGroupBySchema = Yup.object({ where: SessionWhereInputObjectSchema, orderBy: SessionOrderByWithAggregationInputObjectSchema, having: SessionScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(SessionScalarFieldEnumSchema).required()  }).required()