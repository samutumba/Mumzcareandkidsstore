import * as Yup from 'yup';
import { FileWhereUniqueInputObjectSchema } from './internals'

export const FileFindUniqueSchema = Yup.object({ where: FileWhereUniqueInputObjectSchema }).required()