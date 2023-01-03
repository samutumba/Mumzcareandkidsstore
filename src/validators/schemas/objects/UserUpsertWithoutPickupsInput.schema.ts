// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';

export const UserUpsertWithoutPickupsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPickupsInputObjectSchema,
UserUncheckedUpdateWithoutPickupsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPickupsInputObjectSchema,
UserUncheckedCreateWithoutPickupsInputObjectSchema])
});
