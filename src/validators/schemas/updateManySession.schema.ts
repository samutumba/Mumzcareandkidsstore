import * as Yup from 'yup';
import { SessionUpdateManyMutationInputObjectSchema, SessionWhereInputObjectSchema } from './internals'

export const SessionUpdateManySchema = Yup.object({ data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema  }).required()