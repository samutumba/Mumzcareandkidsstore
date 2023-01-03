// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPickupsInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutPickupsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPickupsInputObjectSchema,
UserUncheckedCreateWithoutPickupsInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPickupsInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
