// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartWhereUniqueInputObjectSchema } from '../internals';;
import { CartUpdateWithoutUsersInputObjectSchema } from '../internals';;
import { CartUncheckedUpdateWithoutUsersInputObjectSchema } from '../internals';

export const CartUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Yup.object({
    where: CartWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartUpdateWithoutUsersInputObjectSchema,
CartUncheckedUpdateWithoutUsersInputObjectSchema])
});
