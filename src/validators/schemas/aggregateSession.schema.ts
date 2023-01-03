import * as Yup from 'yup';
import { SessionWhereInputObjectSchema, SessionOrderByWithRelationInputObjectSchema, SessionWhereUniqueInputObjectSchema } from './internals'

export const SessionAggregateSchema = Yup.object({ where: SessionWhereInputObjectSchema, orderBy: SessionOrderByWithRelationInputObjectSchema, cursor: SessionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()