// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutInquiriesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutInquiriesInputObjectSchema,
UserUncheckedCreateWithoutInquiriesInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutInquiriesInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
