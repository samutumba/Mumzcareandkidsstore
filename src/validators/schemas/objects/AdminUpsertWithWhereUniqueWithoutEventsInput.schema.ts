// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminCreateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const AdminUpsertWithWhereUniqueWithoutEventsInputObjectSchema = Yup.object({
    where: AdminWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([AdminUpdateWithoutEventsInputObjectSchema,
AdminUncheckedUpdateWithoutEventsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([AdminCreateWithoutEventsInputObjectSchema,
AdminUncheckedCreateWithoutEventsInputObjectSchema])
});
