// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartWhereUniqueInputObjectSchema } from '../internals';;
import { CartUpdateWithoutUsersInputObjectSchema } from '../internals';;
import { CartUncheckedUpdateWithoutUsersInputObjectSchema } from '../internals';;
import { CartCreateWithoutUsersInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';

export const CartUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Yup.object({
    where: CartWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CartUpdateWithoutUsersInputObjectSchema,
CartUncheckedUpdateWithoutUsersInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CartCreateWithoutUsersInputObjectSchema,
CartUncheckedCreateWithoutUsersInputObjectSchema])
});
