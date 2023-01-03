// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutReviewsInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutReviewsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutReviewsInputObjectSchema,
UserUncheckedCreateWithoutReviewsInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutReviewsInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
