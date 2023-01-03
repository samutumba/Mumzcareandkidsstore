import * as Yup from 'yup';
import { PickupWhereInputObjectSchema } from './internals'

export const PickupDeleteManySchema = Yup.object({ PickupWhereInputObjectSchema  }).required()