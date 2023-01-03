import * as Yup from 'yup';
import { WishlistWhereInputObjectSchema } from './internals'

export const WishlistDeleteManySchema = Yup.object({ WishlistWhereInputObjectSchema  }).required()