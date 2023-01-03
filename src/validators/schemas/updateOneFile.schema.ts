import * as Yup from 'yup';
import { FileUpdateInputObjectSchema, FileWhereUniqueInputObjectSchema } from './internals'

export const FileUpdateOneSchema = Yup.object({ data: FileUpdateInputObjectSchema, where: FileWhereUniqueInputObjectSchema  }).required()