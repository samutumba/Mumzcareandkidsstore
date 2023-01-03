// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateOneWithoutFilesNestedInputObjectSchema } from '../internals';;
import { DeliveryUpdateOneWithoutDocumentsNestedInputObjectSchema } from '../internals';;
import { PickupUpdateOneWithoutFilesNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneWithoutImagesNestedInputObjectSchema } from '../internals';;
import { ProductUpdateOneWithoutImagesNestedInputObjectSchema } from '../internals';

export const FileUpdateWithoutAdminsInputObjectSchema = Yup.object({
    fileKey: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  link: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  type: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  events: EventUpdateOneWithoutFilesNestedInputObjectSchema,  deliveries: DeliveryUpdateOneWithoutDocumentsNestedInputObjectSchema,  pickups: PickupUpdateOneWithoutFilesNestedInputObjectSchema,  locations: LocationUpdateOneWithoutImagesNestedInputObjectSchema,  products: ProductUpdateOneWithoutImagesNestedInputObjectSchema
});
