// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileUncheckedCreateNestedManyWithoutDeliveriesInputObjectSchema } from '../internals';;
import { DeliveryLocationCreateEnvelopeInputObjectSchema } from '../internals';;
import { DeliveryLocationCreateInputObjectSchema } from '../internals';

export const DeliveryUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  documents: FileUncheckedCreateNestedManyWithoutDeliveriesInputObjectSchema,  service: Yup.string().required(),  status: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  location: Yup.mixed().oneOfSchemas([DeliveryLocationCreateEnvelopeInputObjectSchema,
DeliveryLocationCreateInputObjectSchema])
});
