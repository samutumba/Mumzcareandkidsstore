// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminUpdateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminCreateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutFeedbacksInputObjectSchema } from '../internals';

export const AdminUpsertWithoutFeedbacksInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([AdminUpdateWithoutFeedbacksInputObjectSchema,
AdminUncheckedUpdateWithoutFeedbacksInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([AdminCreateWithoutFeedbacksInputObjectSchema,
AdminUncheckedCreateWithoutFeedbacksInputObjectSchema])
});
