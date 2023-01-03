// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryWhereUniqueInputObjectSchema } from '../internals';;
import { DeliveryCreateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema } from '../internals';

export const DeliveryCreateOrConnectWithoutDocumentsInputObjectSchema = Yup.object({
    where: DeliveryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([DeliveryCreateWithoutDocumentsInputObjectSchema,
DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema])
});
