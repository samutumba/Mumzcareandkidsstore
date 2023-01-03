import * as Yup from 'yup';
import { WishlistUpdateManyMutationInputObjectSchema, WishlistWhereInputObjectSchema } from './internals'

export const WishlistUpdateManySchema = Yup.object({ data: WishlistUpdateManyMutationInputObjectSchema, where: WishlistWhereInputObjectSchema  }).required()