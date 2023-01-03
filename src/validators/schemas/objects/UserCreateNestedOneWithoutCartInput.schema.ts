// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutCartInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCartInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutCartInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutCartInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutCartInputObjectSchema,
UserUncheckedCreateWithoutCartInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutCartInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
