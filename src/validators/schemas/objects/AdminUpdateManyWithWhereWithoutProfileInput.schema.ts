// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminScalarWhereInputObjectSchema } from '../internals';;
import { AdminUpdateManyMutationInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateManyWithoutAdminsInputObjectSchema } from '../internals';

export const AdminUpdateManyWithWhereWithoutProfileInputObjectSchema = Yup.object({
    where: AdminScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([AdminUpdateManyMutationInputObjectSchema,
AdminUncheckedUpdateManyWithoutAdminsInputObjectSchema])
});
