import * as Yup from 'yup';
import { WishlistWhereUniqueInputObjectSchema } from './internals'

export const WishlistFindUniqueSchema = Yup.object({ where: WishlistWhereUniqueInputObjectSchema }).required()