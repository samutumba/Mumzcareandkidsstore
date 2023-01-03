// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutCartInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCartInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutCartInputObjectSchema } from '../internals';;
import { UserUpsertWithoutCartInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutCartInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutCartInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutCartNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutCartInputObjectSchema,
UserUncheckedCreateWithoutCartInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutCartInputObjectSchema,  upsert: UserUpsertWithoutCartInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutCartInputObjectSchema,
UserUncheckedUpdateWithoutCartInputObjectSchema])
});
