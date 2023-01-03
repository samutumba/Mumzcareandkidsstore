import * as Yup from 'yup';
import { FileWhereUniqueInputObjectSchema, FileCreateInputObjectSchema, FileUpdateInputObjectSchema } from './internals'

export const FileUpsertSchema = Yup.object({ where: FileWhereUniqueInputObjectSchema, data: FileCreateInputObjectSchema, update: FileUpdateInputObjectSchema  }).required()