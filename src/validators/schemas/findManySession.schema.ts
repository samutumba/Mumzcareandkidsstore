import * as Yup from 'yup';
import { SessionWhereInputObjectSchema, SessionOrderByWithRelationInputObjectSchema, SessionWhereUniqueInputObjectSchema } from './internals';
import { SessionScalarFieldEnumSchema } from './internals'

export const SessionFindManySchema = Yup.object({ where: SessionWhereInputObjectSchema, orderBy: SessionOrderByWithRelationInputObjectSchema, cursor: SessionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(SessionScalarFieldEnumSchema)  }).required()