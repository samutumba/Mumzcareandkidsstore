// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { LocationUpdateemailInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { LocationUpdatephoneInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from '../internals';

export const LocationUncheckedUpdateWithoutImagesInputObjectSchema = Yup.object({
    v: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  address: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  email: Yup.mixed().oneOfSchemas([LocationUpdateemailInputObjectSchema,
Yup.array().of(Yup.string())]),  isStore: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  maps: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  phone: Yup.mixed().oneOfSchemas([LocationUpdatephoneInputObjectSchema,
Yup.array().of(Yup.string())]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  pickups: PickupUncheckedUpdateManyWithoutLocationNestedInputObjectSchema
});
