// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';

export const UserUpsertWithoutReviewsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutReviewsInputObjectSchema,
UserUncheckedUpdateWithoutReviewsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutReviewsInputObjectSchema,
UserUncheckedCreateWithoutReviewsInputObjectSchema])
});
