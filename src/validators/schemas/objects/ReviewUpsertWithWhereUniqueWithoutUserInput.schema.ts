// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewUpdateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewCreateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: ReviewWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ReviewUpdateWithoutUserInputObjectSchema,
ReviewUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutUserInputObjectSchema,
ReviewUncheckedCreateWithoutUserInputObjectSchema])
});
