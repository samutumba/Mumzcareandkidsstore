import * as Yup from 'yup';
import { ItemWhereInputObjectSchema, ItemOrderByWithRelationInputObjectSchema, ItemWhereUniqueInputObjectSchema } from './internals';
import { ItemScalarFieldEnumSchema } from './internals'

export const ItemFindManySchema = Yup.object({ where: ItemWhereInputObjectSchema, orderBy: ItemOrderByWithRelationInputObjectSchema, cursor: ItemWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ItemScalarFieldEnumSchema)  }).required()