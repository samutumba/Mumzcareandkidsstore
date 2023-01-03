// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';;
import { TransactionListRelationFilterObjectSchema } from '../internals';;
import { CartItemListRelationFilterObjectSchema } from '../internals';;
import { ItemListRelationFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';

export const SaleWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => SaleWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SaleWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => SaleWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => SaleWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SaleWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  reference: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  payments: TransactionListRelationFilterObjectSchema,  products: CartItemListRelationFilterObjectSchema,  items: ItemListRelationFilterObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  usersId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  itemsId: StringNullableListFilterObjectSchema
});
