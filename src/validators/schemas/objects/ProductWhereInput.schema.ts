// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { DetailNullableCompositeFilterObjectSchema } from '../internals';;
import { DetailObjectEqualityInputObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { FileListRelationFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { CartItemListRelationFilterObjectSchema } from '../internals';;
import { ReviewListRelationFilterObjectSchema } from '../internals';;
import { ItemListRelationFilterObjectSchema } from '../internals';

export const ProductWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ProductWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ProductWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ProductWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ProductWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ProductWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  basePrice: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  brand: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  category: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  detail: Yup.mixed().oneOfSchemas([DetailNullableCompositeFilterObjectSchema,
DetailObjectEqualityInputObjectSchema]),  enabled: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  images: FileListRelationFilterObjectSchema,  keywords: StringNullableListFilterObjectSchema,  maxAge: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  minAge: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  subCategory: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  cartItem: CartItemListRelationFilterObjectSchema,  reviews: ReviewListRelationFilterObjectSchema,  items: ItemListRelationFilterObjectSchema
});
