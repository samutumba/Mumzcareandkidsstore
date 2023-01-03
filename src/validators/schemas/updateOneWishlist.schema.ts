import * as Yup from 'yup';
import { WishlistUpdateInputObjectSchema, WishlistWhereUniqueInputObjectSchema } from './internals'

export const WishlistUpdateOneSchema = Yup.object({ data: WishlistUpdateInputObjectSchema, where: WishlistWhereUniqueInputObjectSchema  }).required()