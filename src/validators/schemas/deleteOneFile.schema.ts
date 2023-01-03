import * as Yup from 'yup';
import { FileWhereUniqueInputObjectSchema } from './internals'

export const FileDeleteOneSchema = Yup.object({ where: FileWhereUniqueInputObjectSchema  }).required()