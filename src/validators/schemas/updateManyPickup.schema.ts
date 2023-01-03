import * as Yup from 'yup';
import { PickupUpdateManyMutationInputObjectSchema, PickupWhereInputObjectSchema } from './internals'

export const PickupUpdateManySchema = Yup.object({ data: PickupUpdateManyMutationInputObjectSchema, where: PickupWhereInputObjectSchema  }).required()