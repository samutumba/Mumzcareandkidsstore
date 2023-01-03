// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminCreateOrConnectWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUpsertWithWhereUniqueWithoutProfileInputObjectSchema } from '../internals';;
import { AdminCreateManyProfileInputEnvelopeObjectSchema } from '../internals';;
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminUpdateWithWhereUniqueWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUpdateManyWithWhereWithoutProfileInputObjectSchema } from '../internals';;
import { AdminScalarWhereInputObjectSchema } from '../internals';

export const AdminUpdateManyWithoutProfileNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AdminCreateWithoutProfileInputObjectSchema,
Yup.array().of(AdminCreateWithoutProfileInputObjectSchema),
AdminUncheckedCreateWithoutProfileInputObjectSchema,
Yup.array().of(AdminUncheckedCreateWithoutProfileInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([AdminCreateOrConnectWithoutProfileInputObjectSchema,
Yup.array().of(AdminCreateOrConnectWithoutProfileInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([AdminUpsertWithWhereUniqueWithoutProfileInputObjectSchema,
Yup.array().of(AdminUpsertWithWhereUniqueWithoutProfileInputObjectSchema)]),  createMany: AdminCreateManyProfileInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([AdminUpdateWithWhereUniqueWithoutProfileInputObjectSchema,
Yup.array().of(AdminUpdateWithWhereUniqueWithoutProfileInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([AdminUpdateManyWithWhereWithoutProfileInputObjectSchema,
Yup.array().of(AdminUpdateManyWithWhereWithoutProfileInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([AdminScalarWhereInputObjectSchema,
Yup.array().of(AdminScalarWhereInputObjectSchema)])
});
