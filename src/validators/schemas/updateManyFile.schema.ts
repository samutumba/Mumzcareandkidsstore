import * as Yup from 'yup';
import { FileUpdateManyMutationInputObjectSchema, FileWhereInputObjectSchema } from './internals'

export const FileUpdateManySchema = Yup.object({ data: FileUpdateManyMutationInputObjectSchema, where: FileWhereInputObjectSchema  }).required()