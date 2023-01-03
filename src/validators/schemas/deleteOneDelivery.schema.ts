import * as Yup from 'yup';
import { DeliveryWhereUniqueInputObjectSchema } from './internals'

export const DeliveryDeleteOneSchema = Yup.object({ where: DeliveryWhereUniqueInputObjectSchema  }).required()