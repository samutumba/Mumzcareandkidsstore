import * as Yup from 'yup';
import { SessionWhereInputObjectSchema } from './internals'

export const SessionDeleteManySchema = Yup.object({ SessionWhereInputObjectSchema  }).required()