// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartWhereUniqueInputObjectSchema } from '../internals';;
import { CartCreateWithoutUsersInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';

export const CartCreateOrConnectWithoutUsersInputObjectSchema = Yup.object({
    where: CartWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CartCreateWithoutUsersInputObjectSchema,
CartUncheckedCreateWithoutUsersInputObjectSchema])
});
