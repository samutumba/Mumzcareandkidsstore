import * as Yup from 'yup';
import { PickupWhereInputObjectSchema, PickupOrderByWithAggregationInputObjectSchema, PickupScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { PickupScalarFieldEnumSchema } from './internals'

export const PickupGroupBySchema = Yup.object({ where: PickupWhereInputObjectSchema, orderBy: PickupOrderByWithAggregationInputObjectSchema, having: PickupScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(PickupScalarFieldEnumSchema).required()  }).required()