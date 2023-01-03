// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutSalesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { UserUpsertWithoutSalesInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';

export const UserUpdateOneWithoutSalesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutSalesInputObjectSchema,
UserUncheckedCreateWithoutSalesInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutSalesInputObjectSchema,  upsert: UserUpsertWithoutSalesInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutSalesInputObjectSchema,
UserUncheckedUpdateWithoutSalesInputObjectSchema])
});
