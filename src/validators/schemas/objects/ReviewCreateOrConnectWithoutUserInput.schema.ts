// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewCreateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const ReviewCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: ReviewWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutUserInputObjectSchema,
ReviewUncheckedCreateWithoutUserInputObjectSchema])
});
