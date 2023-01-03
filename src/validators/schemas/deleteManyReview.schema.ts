import * as Yup from 'yup';
import { ReviewWhereInputObjectSchema } from './internals'

export const ReviewDeleteManySchema = Yup.object({ ReviewWhereInputObjectSchema  }).required()