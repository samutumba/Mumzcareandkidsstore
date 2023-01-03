import * as Yup from 'yup';
import { WishlistWhereUniqueInputObjectSchema } from './internals'

export const WishlistDeleteOneSchema = Yup.object({ where: WishlistWhereUniqueInputObjectSchema  }).required()