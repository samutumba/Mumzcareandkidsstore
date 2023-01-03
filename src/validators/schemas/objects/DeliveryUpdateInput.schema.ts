// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { FileUpdateManyWithoutDeliveriesNestedInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DeliveryLocationUpdateEnvelopeInputObjectSchema } from '../internals';;
import { DeliveryLocationCreateInputObjectSchema } from '../internals';

export const DeliveryUpdateInputObjectSchema = Yup.object({
    v: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  documents: FileUpdateManyWithoutDeliveriesNestedInputObjectSchema,  service: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  status: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  location: Yup.mixed().oneOfSchemas([DeliveryLocationUpdateEnvelopeInputObjectSchema,
DeliveryLocationCreateInputObjectSchema])
});
