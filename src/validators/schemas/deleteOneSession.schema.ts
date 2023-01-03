import * as Yup from 'yup';
import { SessionWhereUniqueInputObjectSchema } from './internals'

export const SessionDeleteOneSchema = Yup.object({ where: SessionWhereUniqueInputObjectSchema  }).required()