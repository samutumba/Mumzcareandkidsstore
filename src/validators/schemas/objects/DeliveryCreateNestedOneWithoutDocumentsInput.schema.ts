// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryCreateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryCreateOrConnectWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryWhereUniqueInputObjectSchema } from '../internals';

export const DeliveryCreateNestedOneWithoutDocumentsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([DeliveryCreateWithoutDocumentsInputObjectSchema,
DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema]),  connectOrCreate: DeliveryCreateOrConnectWithoutDocumentsInputObjectSchema,  connect: DeliveryWhereUniqueInputObjectSchema
});
