import * as Yup from 'yup';
import { FileWhereInputObjectSchema, FileOrderByWithRelationInputObjectSchema, FileWhereUniqueInputObjectSchema } from './internals';
import { FileScalarFieldEnumSchema } from './internals'

export const FileFindManySchema = Yup.object({ where: FileWhereInputObjectSchema, orderBy: FileOrderByWithRelationInputObjectSchema, cursor: FileWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(FileScalarFieldEnumSchema)  }).required()