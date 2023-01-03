import * as Yup from 'yup';
import { WishlistWhereInputObjectSchema, WishlistOrderByWithAggregationInputObjectSchema, WishlistScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { WishlistScalarFieldEnumSchema } from './internals'

export const WishlistGroupBySchema = Yup.object({ where: WishlistWhereInputObjectSchema, orderBy: WishlistOrderByWithAggregationInputObjectSchema, having: WishlistScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(WishlistScalarFieldEnumSchema).required()  }).required()