// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserUpsertWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutInquiriesInputObjectSchema } from '../internals';

export const UserUpdateOneWithoutInquiriesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutInquiriesInputObjectSchema,
UserUncheckedCreateWithoutInquiriesInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutInquiriesInputObjectSchema,  upsert: UserUpsertWithoutInquiriesInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutInquiriesInputObjectSchema,
UserUncheckedUpdateWithoutInquiriesInputObjectSchema])
});
