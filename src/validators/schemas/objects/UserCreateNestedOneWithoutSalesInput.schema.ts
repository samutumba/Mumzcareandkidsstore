// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutSalesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutSalesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutSalesInputObjectSchema,
UserUncheckedCreateWithoutSalesInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutSalesInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
