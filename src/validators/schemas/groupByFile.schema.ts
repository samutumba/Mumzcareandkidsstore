import * as Yup from 'yup';
import { FileWhereInputObjectSchema, FileOrderByWithAggregationInputObjectSchema, FileScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { FileScalarFieldEnumSchema } from './internals'

export const FileGroupBySchema = Yup.object({ where: FileWhereInputObjectSchema, orderBy: FileOrderByWithAggregationInputObjectSchema, having: FileScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(FileScalarFieldEnumSchema).required()  }).required()