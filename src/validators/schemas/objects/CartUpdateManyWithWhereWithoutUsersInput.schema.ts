// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartScalarWhereInputObjectSchema } from '../internals';;
import { CartUpdateManyMutationInputObjectSchema } from '../internals';;
import { CartUncheckedUpdateManyWithoutCartInputObjectSchema } from '../internals';

export const CartUpdateManyWithWhereWithoutUsersInputObjectSchema = Yup.object({
    where: CartScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CartUpdateManyMutationInputObjectSchema,
CartUncheckedUpdateManyWithoutCartInputObjectSchema])
});
