// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryUpdateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryUncheckedUpdateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryCreateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema } from '../internals';

export const DeliveryUpsertWithoutDocumentsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([DeliveryUpdateWithoutDocumentsInputObjectSchema,
DeliveryUncheckedUpdateWithoutDocumentsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([DeliveryCreateWithoutDocumentsInputObjectSchema,
DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema])
});
