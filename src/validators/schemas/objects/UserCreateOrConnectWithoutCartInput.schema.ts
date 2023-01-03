// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutCartInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCartInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutCartInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutCartInputObjectSchema,
UserUncheckedCreateWithoutCartInputObjectSchema])
});
