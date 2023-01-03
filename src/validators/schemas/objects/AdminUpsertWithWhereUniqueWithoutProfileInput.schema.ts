// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminUpdateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminCreateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutProfileInputObjectSchema } from '../internals';

export const AdminUpsertWithWhereUniqueWithoutProfileInputObjectSchema = Yup.object({
    where: AdminWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([AdminUpdateWithoutProfileInputObjectSchema,
AdminUncheckedUpdateWithoutProfileInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([AdminCreateWithoutProfileInputObjectSchema,
AdminUncheckedCreateWithoutProfileInputObjectSchema])
});
