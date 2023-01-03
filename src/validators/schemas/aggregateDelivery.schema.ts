import * as Yup from 'yup';
import { DeliveryWhereInputObjectSchema, DeliveryOrderByWithRelationInputObjectSchema, DeliveryWhereUniqueInputObjectSchema } from './internals'

export const DeliveryAggregateSchema = Yup.object({ where: DeliveryWhereInputObjectSchema, orderBy: DeliveryOrderByWithRelationInputObjectSchema, cursor: DeliveryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()