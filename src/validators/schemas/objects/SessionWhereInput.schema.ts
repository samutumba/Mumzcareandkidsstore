// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const SessionWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => SessionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SessionWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => SessionWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => SessionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SessionWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  expires: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  session: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
