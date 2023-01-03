// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutInquiriesInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutInquiriesInputObjectSchema,
UserUncheckedCreateWithoutInquiriesInputObjectSchema])
});
