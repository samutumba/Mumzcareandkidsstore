// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumPaymentTypeFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { FloatNullableFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const TransactionScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  mode: Yup.mixed().oneOfSchemas([EnumPaymentTypeFilterObjectSchema]),  amount: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  payment_fee: Yup.mixed().oneOfSchemas([FloatNullableFilterObjectSchema,
Yup.number()]),  transaction_id: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  txt_ref: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  isExpense: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  salesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
