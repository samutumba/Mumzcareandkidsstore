import * as Yup from 'yup';
import { WishlistWhereUniqueInputObjectSchema, WishlistCreateInputObjectSchema, WishlistUpdateInputObjectSchema } from './internals'

export const WishlistUpsertSchema = Yup.object({ where: WishlistWhereUniqueInputObjectSchema, data: WishlistCreateInputObjectSchema, update: WishlistUpdateInputObjectSchema  }).required()