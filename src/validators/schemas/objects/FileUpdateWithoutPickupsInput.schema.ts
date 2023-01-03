// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateOneWithoutFilesNestedInputObjectSchema } from '../internals';;
import { DeliveryUpdateOneWithoutDocumentsNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneWithoutImagesNestedInputObjectSchema } from '../internals';;
import { ProductUpdateOneWithoutImagesNestedInputObjectSchema } from '../internals';;
import { AdminUpdateManyWithoutProfileNestedInputObjectSchema } from '../internals';

export const FileUpdateWithoutPickupsInputObjectSchema = Yup.object({
    fileKey: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  link: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  type: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  events: EventUpdateOneWithoutFilesNestedInputObjectSchema,  deliveries: DeliveryUpdateOneWithoutDocumentsNestedInputObjectSchema,  locations: LocationUpdateOneWithoutImagesNestedInputObjectSchema,  products: ProductUpdateOneWithoutImagesNestedInputObjectSchema,  admins: AdminUpdateManyWithoutProfileNestedInputObjectSchema
});
