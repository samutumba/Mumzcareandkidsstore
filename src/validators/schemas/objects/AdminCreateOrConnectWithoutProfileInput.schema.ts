// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminCreateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutProfileInputObjectSchema } from '../internals';

export const AdminCreateOrConnectWithoutProfileInputObjectSchema = Yup.object({
    where: AdminWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([AdminCreateWithoutProfileInputObjectSchema,
AdminUncheckedCreateWithoutProfileInputObjectSchema])
});
