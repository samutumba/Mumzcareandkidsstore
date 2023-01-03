// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { AdminWhereUniqueInputObjectSchema } from '../internals';

export const AdminCreateNestedManyWithoutEventsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AdminCreateWithoutEventsInputObjectSchema,
Yup.array().of(AdminCreateWithoutEventsInputObjectSchema),
AdminUncheckedCreateWithoutEventsInputObjectSchema,
Yup.array().of(AdminUncheckedCreateWithoutEventsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([AdminCreateOrConnectWithoutEventsInputObjectSchema,
Yup.array().of(AdminCreateOrConnectWithoutEventsInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)])
});
