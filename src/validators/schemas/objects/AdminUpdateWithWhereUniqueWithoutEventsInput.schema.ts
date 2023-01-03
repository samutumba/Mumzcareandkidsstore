// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';

export const AdminUpdateWithWhereUniqueWithoutEventsInputObjectSchema = Yup.object({
    where: AdminWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([AdminUpdateWithoutEventsInputObjectSchema,
AdminUncheckedUpdateWithoutEventsInputObjectSchema])
});
