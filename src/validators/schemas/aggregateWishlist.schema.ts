import * as Yup from 'yup';
import { WishlistWhereInputObjectSchema, WishlistOrderByWithRelationInputObjectSchema, WishlistWhereUniqueInputObjectSchema } from './internals'

export const WishlistAggregateSchema = Yup.object({ where: WishlistWhereInputObjectSchema, orderBy: WishlistOrderByWithRelationInputObjectSchema, cursor: WishlistWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()