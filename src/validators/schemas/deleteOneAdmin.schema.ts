import * as Yup from 'yup';
import { AdminWhereUniqueInputObjectSchema } from './internals'

export const AdminDeleteOneSchema = Yup.object({ where: AdminWhereUniqueInputObjectSchema  }).required()