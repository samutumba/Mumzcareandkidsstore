// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutPickupsInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPickupsInputObjectSchema,
UserUncheckedCreateWithoutPickupsInputObjectSchema])
});
