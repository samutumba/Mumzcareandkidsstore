// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { UserCreateWithoutSalesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const UserUpsertWithoutSalesInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutSalesInputObjectSchema,
UserUncheckedUpdateWithoutSalesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutSalesInputObjectSchema,
UserUncheckedCreateWithoutSalesInputObjectSchema])
});
