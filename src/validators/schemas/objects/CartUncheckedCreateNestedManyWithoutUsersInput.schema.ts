// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartCreateWithoutUsersInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';;
import { CartCreateOrConnectWithoutUsersInputObjectSchema } from '../internals';;
import { CartCreateManyUsersInputEnvelopeObjectSchema } from '../internals';;
import { CartWhereUniqueInputObjectSchema } from '../internals';

export const CartUncheckedCreateNestedManyWithoutUsersInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartCreateWithoutUsersInputObjectSchema,
Yup.array().of(CartCreateWithoutUsersInputObjectSchema),
CartUncheckedCreateWithoutUsersInputObjectSchema,
Yup.array().of(CartUncheckedCreateWithoutUsersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CartCreateOrConnectWithoutUsersInputObjectSchema,
Yup.array().of(CartCreateOrConnectWithoutUsersInputObjectSchema)]),  createMany: CartCreateManyUsersInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CartWhereUniqueInputObjectSchema,
Yup.array().of(CartWhereUniqueInputObjectSchema)])
});
