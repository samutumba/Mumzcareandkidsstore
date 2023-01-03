import * as Yup from 'yup';
import { DeliveryCreateInputObjectSchema } from './internals'

export const DeliveryCreateSchema = Yup.object({ data: DeliveryCreateInputObjectSchema  }).required()