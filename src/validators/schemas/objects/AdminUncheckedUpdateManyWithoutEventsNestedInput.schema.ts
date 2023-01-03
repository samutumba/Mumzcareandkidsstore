// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { AdminCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUpsertWithWhereUniqueWithoutEventsInputObjectSchema } from '../internals';;
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminUpdateWithWhereUniqueWithoutEventsInputObjectSchema } from '../internals';;
import { AdminUpdateManyWithWhereWithoutEventsInputObjectSchema } from '../internals';;
import { AdminScalarWhereInputObjectSchema } from '../internals';

export const AdminUncheckedUpdateManyWithoutEventsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AdminCreateWithoutEventsInputObjectSchema,
Yup.array().of(AdminCreateWithoutEventsInputObjectSchema),
AdminUncheckedCreateWithoutEventsInputObjectSchema,
Yup.array().of(AdminUncheckedCreateWithoutEventsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([AdminCreateOrConnectWithoutEventsInputObjectSchema,
Yup.array().of(AdminCreateOrConnectWithoutEventsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([AdminUpsertWithWhereUniqueWithoutEventsInputObjectSchema,
Yup.array().of(AdminUpsertWithWhereUniqueWithoutEventsInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([AdminUpdateWithWhereUniqueWithoutEventsInputObjectSchema,
Yup.array().of(AdminUpdateWithWhereUniqueWithoutEventsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([AdminUpdateManyWithWhereWithoutEventsInputObjectSchema,
Yup.array().of(AdminUpdateManyWithWhereWithoutEventsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([AdminScalarWhereInputObjectSchema,
Yup.array().of(AdminScalarWhereInputObjectSchema)])
});
