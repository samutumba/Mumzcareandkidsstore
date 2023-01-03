import * as Yup from 'yup';
import { AdminWhereUniqueInputObjectSchema } from './internals'

export const AdminFindUniqueSchema = Yup.object({ where: AdminWhereUniqueInputObjectSchema }).required()