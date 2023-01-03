import * as Yup from 'yup';
import { WishlistCreateInputObjectSchema } from './internals'

export const WishlistCreateSchema = Yup.object({ data: WishlistCreateInputObjectSchema  }).required()