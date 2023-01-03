// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminCreateOrConnectWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminUpsertWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminUpdateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateWithoutFeedbacksInputObjectSchema } from '../internals';

export const AdminUpdateOneRequiredWithoutFeedbacksNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AdminCreateWithoutFeedbacksInputObjectSchema,
AdminUncheckedCreateWithoutFeedbacksInputObjectSchema]),  connectOrCreate: AdminCreateOrConnectWithoutFeedbacksInputObjectSchema,  upsert: AdminUpsertWithoutFeedbacksInputObjectSchema,  connect: AdminWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([AdminUpdateWithoutFeedbacksInputObjectSchema,
AdminUncheckedUpdateWithoutFeedbacksInputObjectSchema])
});
