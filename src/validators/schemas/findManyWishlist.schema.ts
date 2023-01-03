import * as Yup from 'yup';
import { WishlistWhereInputObjectSchema, WishlistOrderByWithRelationInputObjectSchema, WishlistWhereUniqueInputObjectSchema } from './internals';
import { WishlistScalarFieldEnumSchema } from './internals'

export const WishlistFindManySchema = Yup.object({ where: WishlistWhereInputObjectSchema, orderBy: WishlistOrderByWithRelationInputObjectSchema, cursor: WishlistWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(WishlistScalarFieldEnumSchema)  }).required()