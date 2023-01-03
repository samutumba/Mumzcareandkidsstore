import * as Yup from 'yup';
import { PickupWhereUniqueInputObjectSchema, PickupCreateInputObjectSchema, PickupUpdateInputObjectSchema } from './internals'

export const PickupUpsertSchema = Yup.object({ where: PickupWhereUniqueInputObjectSchema, data: PickupCreateInputObjectSchema, update: PickupUpdateInputObjectSchema  }).required()