// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutReviewsInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutReviewsInputObjectSchema,
UserUncheckedCreateWithoutReviewsInputObjectSchema])
});
