// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryCreateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryCreateOrConnectWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryUpsertWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryWhereUniqueInputObjectSchema } from '../internals';;
import { DeliveryUpdateWithoutDocumentsInputObjectSchema } from '../internals';;
import { DeliveryUncheckedUpdateWithoutDocumentsInputObjectSchema } from '../internals';

export const DeliveryUpdateOneWithoutDocumentsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([DeliveryCreateWithoutDocumentsInputObjectSchema,
DeliveryUncheckedCreateWithoutDocumentsInputObjectSchema]),  connectOrCreate: DeliveryCreateOrConnectWithoutDocumentsInputObjectSchema,  upsert: DeliveryUpsertWithoutDocumentsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: DeliveryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([DeliveryUpdateWithoutDocumentsInputObjectSchema,
DeliveryUncheckedUpdateWithoutDocumentsInputObjectSchema])
});
