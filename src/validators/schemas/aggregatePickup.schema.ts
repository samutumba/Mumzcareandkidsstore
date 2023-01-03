import * as Yup from 'yup';
import { PickupWhereInputObjectSchema, PickupOrderByWithRelationInputObjectSchema, PickupWhereUniqueInputObjectSchema } from './internals'

export const PickupAggregateSchema = Yup.object({ where: PickupWhereInputObjectSchema, orderBy: PickupOrderByWithRelationInputObjectSchema, cursor: PickupWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()