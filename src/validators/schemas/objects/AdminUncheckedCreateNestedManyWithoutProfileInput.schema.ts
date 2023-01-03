// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutProfileInputObjectSchema } from '../internals';;
import { AdminCreateOrConnectWithoutProfileInputObjectSchema } from '../internals';;
import { AdminCreateManyProfileInputEnvelopeObjectSchema } from '../internals';;
import { AdminWhereUniqueInputObjectSchema } from '../internals';

export const AdminUncheckedCreateNestedManyWithoutProfileInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AdminCreateWithoutProfileInputObjectSchema,
Yup.array().of(AdminCreateWithoutProfileInputObjectSchema),
AdminUncheckedCreateWithoutProfileInputObjectSchema,
Yup.array().of(AdminUncheckedCreateWithoutProfileInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([AdminCreateOrConnectWithoutProfileInputObjectSchema,
Yup.array().of(AdminCreateOrConnectWithoutProfileInputObjectSchema)]),  createMany: AdminCreateManyProfileInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([AdminWhereUniqueInputObjectSchema,
Yup.array().of(AdminWhereUniqueInputObjectSchema)])
});
