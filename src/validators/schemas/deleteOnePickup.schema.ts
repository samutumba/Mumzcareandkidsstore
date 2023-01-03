import * as Yup from 'yup';
import { PickupWhereUniqueInputObjectSchema } from './internals'

export const PickupDeleteOneSchema = Yup.object({ where: PickupWhereUniqueInputObjectSchema  }).required()