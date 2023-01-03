import * as Yup from 'yup';
import { PickupUpdateInputObjectSchema, PickupWhereUniqueInputObjectSchema } from './internals'

export const PickupUpdateOneSchema = Yup.object({ data: PickupUpdateInputObjectSchema, where: PickupWhereUniqueInputObjectSchema  }).required()