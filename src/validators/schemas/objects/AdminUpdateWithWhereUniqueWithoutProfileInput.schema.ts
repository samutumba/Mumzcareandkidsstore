// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminUpdateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateWithoutProfileInputObjectSchema } from '../internals';

export const AdminUpdateWithWhereUniqueWithoutProfileInputObjectSchema = Yup.object({
    where: AdminWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([AdminUpdateWithoutProfileInputObjectSchema,
AdminUncheckedUpdateWithoutProfileInputObjectSchema])
});
