import * as Yup from 'yup';
import { DeliveryWhereInputObjectSchema, DeliveryOrderByWithAggregationInputObjectSchema, DeliveryScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { DeliveryScalarFieldEnumSchema } from './internals'

export const DeliveryGroupBySchema = Yup.object({ where: DeliveryWhereInputObjectSchema, orderBy: DeliveryOrderByWithAggregationInputObjectSchema, having: DeliveryScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(DeliveryScalarFieldEnumSchema).required()  }).required()