import * as Yup from 'yup';
import { FileWhereInputObjectSchema, FileOrderByWithRelationInputObjectSchema, FileWhereUniqueInputObjectSchema } from './internals'

export const FileAggregateSchema = Yup.object({ where: FileWhereInputObjectSchema, orderBy: FileOrderByWithRelationInputObjectSchema, cursor: FileWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()