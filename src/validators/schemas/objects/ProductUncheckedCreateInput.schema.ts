// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailNullableCreateEnvelopeInputObjectSchema } from '../internals';;
import { DetailCreateInputObjectSchema } from '../internals';;
import { FileUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from '../internals';;
import { ProductCreatekeywordsInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from '../internals';

export const ProductUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  basePrice: Yup.number().required(),  brand: Yup.string().required(),  category: Yup.string().required(),  createdAt: Yup.date(),  description: Yup.string().required(),  detail: Yup.mixed().oneOfSchemas([DetailNullableCreateEnvelopeInputObjectSchema,
DetailCreateInputObjectSchema]),  enabled: Yup.boolean().required(),  images: FileUncheckedCreateNestedManyWithoutProductsInputObjectSchema,  keywords: Yup.mixed().oneOfSchemas([ProductCreatekeywordsInputObjectSchema,
Yup.array().of(Yup.string())]),  maxAge: Yup.number().required(),  minAge: Yup.number().required(),  subCategory: Yup.string().required(),  title: Yup.string().required(),  updatedAt: Yup.date(),  cartItem: CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema,  reviews: ReviewUncheckedCreateNestedManyWithoutProductsInputObjectSchema,  items: ItemUncheckedCreateNestedManyWithoutProductInputObjectSchema
});
