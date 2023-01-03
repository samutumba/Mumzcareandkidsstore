import * as Yup from 'yup';
import { SessionCreateInputObjectSchema } from './internals'

export const SessionCreateSchema = Yup.object({ data: SessionCreateInputObjectSchema  }).required()