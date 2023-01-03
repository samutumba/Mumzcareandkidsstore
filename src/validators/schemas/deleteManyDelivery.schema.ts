import * as Yup from 'yup';
import { DeliveryWhereInputObjectSchema } from './internals'

export const DeliveryDeleteManySchema = Yup.object({ DeliveryWhereInputObjectSchema  }).required()