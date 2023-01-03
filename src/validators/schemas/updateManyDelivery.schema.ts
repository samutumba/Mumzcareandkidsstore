import * as Yup from 'yup';
import { DeliveryUpdateManyMutationInputObjectSchema, DeliveryWhereInputObjectSchema } from './internals'

export const DeliveryUpdateManySchema = Yup.object({ data: DeliveryUpdateManyMutationInputObjectSchema, where: DeliveryWhereInputObjectSchema  }).required()