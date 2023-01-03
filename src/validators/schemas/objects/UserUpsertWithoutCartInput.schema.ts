// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutCartInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutCartInputObjectSchema } from '../internals';;
import { UserCreateWithoutCartInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCartInputObjectSchema } from '../internals';

export const UserUpsertWithoutCartInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutCartInputObjectSchema,
UserUncheckedUpdateWithoutCartInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutCartInputObjectSchema,
UserUncheckedCreateWithoutCartInputObjectSchema])
});
