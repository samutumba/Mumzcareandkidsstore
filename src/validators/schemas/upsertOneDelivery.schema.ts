import * as Yup from 'yup';
import { DeliveryWhereUniqueInputObjectSchema, DeliveryCreateInputObjectSchema, DeliveryUpdateInputObjectSchema } from './internals'

export const DeliveryUpsertSchema = Yup.object({ where: DeliveryWhereUniqueInputObjectSchema, data: DeliveryCreateInputObjectSchema, update: DeliveryUpdateInputObjectSchema  }).required()