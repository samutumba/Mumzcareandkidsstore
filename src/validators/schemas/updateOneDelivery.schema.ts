import * as Yup from 'yup';
import { DeliveryUpdateInputObjectSchema, DeliveryWhereUniqueInputObjectSchema } from './internals'

export const DeliveryUpdateOneSchema = Yup.object({ data: DeliveryUpdateInputObjectSchema, where: DeliveryWhereUniqueInputObjectSchema  }).required()