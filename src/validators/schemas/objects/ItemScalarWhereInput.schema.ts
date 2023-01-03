// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';

export const ItemScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ItemScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ItemScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ItemScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ItemScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ItemScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  color: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  material: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  size: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  model: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  sold: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  salesId: StringNullableListFilterObjectSchema,  productsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
