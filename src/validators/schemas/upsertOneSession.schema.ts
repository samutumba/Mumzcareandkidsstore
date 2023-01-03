import * as Yup from 'yup';
import { SessionWhereUniqueInputObjectSchema, SessionCreateInputObjectSchema, SessionUpdateInputObjectSchema } from './internals'

export const SessionUpsertSchema = Yup.object({ where: SessionWhereUniqueInputObjectSchema, data: SessionCreateInputObjectSchema, update: SessionUpdateInputObjectSchema  }).required()