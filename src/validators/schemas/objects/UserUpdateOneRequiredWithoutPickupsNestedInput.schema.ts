// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPickupsInputObjectSchema } from '../internals';;
import { UserUpsertWithoutPickupsInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPickupsInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutPickupsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPickupsInputObjectSchema,
UserUncheckedCreateWithoutPickupsInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPickupsInputObjectSchema,  upsert: UserUpsertWithoutPickupsInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPickupsInputObjectSchema,
UserUncheckedUpdateWithoutPickupsInputObjectSchema])
});
