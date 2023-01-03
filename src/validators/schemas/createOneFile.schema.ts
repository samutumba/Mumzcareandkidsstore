import * as Yup from 'yup';
import { FileCreateInputObjectSchema } from './internals'

export const FileCreateSchema = Yup.object({ data: FileCreateInputObjectSchema  }).required()