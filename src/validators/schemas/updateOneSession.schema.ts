import * as Yup from 'yup';
import { SessionUpdateInputObjectSchema, SessionWhereUniqueInputObjectSchema } from './internals'

export const SessionUpdateOneSchema = Yup.object({ data: SessionUpdateInputObjectSchema, where: SessionWhereUniqueInputObjectSchema  }).required()