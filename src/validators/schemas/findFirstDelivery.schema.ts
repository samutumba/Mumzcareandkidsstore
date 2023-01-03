import * as Yup from 'yup';
import { DeliveryWhereInputObjectSchema, DeliveryOrderByWithRelationInputObjectSchema, DeliveryWhereUniqueInputObjectSchema } from './internals';
import { DeliveryScalarFieldEnumSchema } from './internals'

export const DeliveryFindFirstSchema = Yup.object({ where: DeliveryWhereInputObjectSchema, orderBy: DeliveryOrderByWithRelationInputObjectSchema, cursor: DeliveryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(DeliveryScalarFieldEnumSchema) }).required()