import * as Yup from 'yup';
import { SessionWhereUniqueInputObjectSchema } from './internals'

export const SessionFindUniqueSchema = Yup.object({ where: SessionWhereUniqueInputObjectSchema }).required()