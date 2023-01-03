import * as Yup from 'yup';
import { DeliveryWhereUniqueInputObjectSchema } from './internals'

export const DeliveryFindUniqueSchema = Yup.object({ where: DeliveryWhereUniqueInputObjectSchema }).required()