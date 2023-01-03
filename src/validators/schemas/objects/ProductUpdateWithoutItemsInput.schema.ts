// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DetailNullableUpdateEnvelopeInputObjectSchema } from '../internals';;
import { DetailCreateInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { FileUpdateManyWithoutProductsNestedInputObjectSchema } from '../internals';;
import { ProductUpdatekeywordsInputObjectSchema } from '../internals';;
import { FloatFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { CartItemUpdateManyWithoutProductNestedInputObjectSchema } from '../internals';;
import { ReviewUpdateManyWithoutProductsNestedInputObjectSchema } from '../internals';

export const ProductUpdateWithoutItemsInputObjectSchema = Yup.object({
    v: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  basePrice: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  brand: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  category: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  detail: Yup.mixed().oneOfSchemas([DetailNullableUpdateEnvelopeInputObjectSchema,
DetailCreateInputObjectSchema]),  enabled: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  images: FileUpdateManyWithoutProductsNestedInputObjectSchema,  keywords: Yup.mixed().oneOfSchemas([ProductUpdatekeywordsInputObjectSchema,
Yup.array().of(Yup.string())]),  maxAge: Yup.mixed().oneOfSchemas([Yup.number(),
FloatFieldUpdateOperationsInputObjectSchema]),  minAge: Yup.mixed().oneOfSchemas([Yup.number(),
FloatFieldUpdateOperationsInputObjectSchema]),  subCategory: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  title: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  cartItem: CartItemUpdateManyWithoutProductNestedInputObjectSchema,  reviews: ReviewUpdateManyWithoutProductsNestedInputObjectSchema
});
