// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartCreateWithoutUsersInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';;
import { CartCreateOrConnectWithoutUsersInputObjectSchema } from '../internals';;
import { CartUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from '../internals';;
import { CartCreateManyUsersInputEnvelopeObjectSchema } from '../internals';;
import { CartWhereUniqueInputObjectSchema } from '../internals';;
import { CartUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from '../internals';;
import { CartUpdateManyWithWhereWithoutUsersInputObjectSchema } from '../internals';;
import { CartScalarWhereInputObjectSchema } from '../internals';

export const CartUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartCreateWithoutUsersInputObjectSchema,
Yup.array().of(CartCreateWithoutUsersInputObjectSchema),
CartUncheckedCreateWithoutUsersInputObjectSchema,
Yup.array().of(CartUncheckedCreateWithoutUsersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartCreateOrConnectWithoutUsersInputObjectSchema,
Yup.array().of(CartCreateOrConnectWithoutUsersInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CartUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
Yup.array().of(CartUpsertWithWhereUniqueWithoutUsersInputObjectSchema)]),  createMany: CartCreateManyUsersInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CartWhereUniqueInputObjectSchema,
Yup.array().of(CartWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CartWhereUniqueInputObjectSchema,
Yup.array().of(CartWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CartWhereUniqueInputObjectSchema,
Yup.array().of(CartWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CartWhereUniqueInputObjectSchema,
Yup.array().of(CartWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CartUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
Yup.array().of(CartUpdateWithWhereUniqueWithoutUsersInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CartUpdateManyWithWhereWithoutUsersInputObjectSchema,
Yup.array().of(CartUpdateManyWithWhereWithoutUsersInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CartScalarWhereInputObjectSchema,
Yup.array().of(CartScalarWhereInputObjectSchema)])
});
