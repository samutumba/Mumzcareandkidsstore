// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutReviewsInputObjectSchema } from '../internals';;
import { UserUpsertWithoutReviewsInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutReviewsInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutReviewsInputObjectSchema,
UserUncheckedCreateWithoutReviewsInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutReviewsInputObjectSchema,  upsert: UserUpsertWithoutReviewsInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutReviewsInputObjectSchema,
UserUncheckedUpdateWithoutReviewsInputObjectSchema])
});
