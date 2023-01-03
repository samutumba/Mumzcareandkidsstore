import * as Yup from 'yup';
import { PickupWhereUniqueInputObjectSchema } from './internals'

export const PickupFindUniqueSchema = Yup.object({ where: PickupWhereUniqueInputObjectSchema }).required()