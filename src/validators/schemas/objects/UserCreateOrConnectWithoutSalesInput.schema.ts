// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutSalesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutSalesInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutSalesInputObjectSchema,
UserUncheckedCreateWithoutSalesInputObjectSchema])
});
