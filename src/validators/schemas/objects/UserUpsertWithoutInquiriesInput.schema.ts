// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';

export const UserUpsertWithoutInquiriesInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutInquiriesInputObjectSchema,
UserUncheckedUpdateWithoutInquiriesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutInquiriesInputObjectSchema,
UserUncheckedCreateWithoutInquiriesInputObjectSchema])
});
