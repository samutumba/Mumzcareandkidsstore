import * as Yup from 'yup';
import { PickupWhereInputObjectSchema, PickupOrderByWithRelationInputObjectSchema, PickupWhereUniqueInputObjectSchema } from './internals';
import { PickupScalarFieldEnumSchema } from './internals'

export const PickupFindFirstSchema = Yup.object({ where: PickupWhereInputObjectSchema, orderBy: PickupOrderByWithRelationInputObjectSchema, cursor: PickupWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(PickupScalarFieldEnumSchema) }).required()