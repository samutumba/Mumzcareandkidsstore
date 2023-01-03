// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminCreateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const AdminCreateOrConnectWithoutEventsInputObjectSchema = Yup.object({
    where: AdminWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([AdminCreateWithoutEventsInputObjectSchema,
AdminUncheckedCreateWithoutEventsInputObjectSchema])
});
