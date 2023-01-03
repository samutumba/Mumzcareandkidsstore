import * as Yup from 'yup';
import { PickupCreateInputObjectSchema } from './internals'

export const PickupCreateSchema = Yup.object({ data: PickupCreateInputObjectSchema  }).required()