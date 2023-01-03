// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { FileListRelationFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { DeliveryLocationCompositeFilterObjectSchema } from '../internals';;
import { DeliveryLocationObjectEqualityInputObjectSchema } from '../internals';

export const DeliveryWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => DeliveryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DeliveryWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => DeliveryWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => DeliveryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DeliveryWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  documents: FileListRelationFilterObjectSchema,  service: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  status: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  location: Yup.mixed().oneOfSchemas([DeliveryLocationCompositeFilterObjectSchema,
DeliveryLocationObjectEqualityInputObjectSchema])
});
