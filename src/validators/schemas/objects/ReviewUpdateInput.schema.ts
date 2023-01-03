// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from '../internals';;
import { UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from '../internals';;
import { FloatFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';

export const ReviewUpdateInputObjectSchema = Yup.object({
    products: ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema,  user: UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema,  rating: Yup.mixed().oneOfSchemas([Yup.number(),
FloatFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema])
});
