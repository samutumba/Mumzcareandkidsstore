// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateparticipantsIDInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateManyWithoutEventsNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';

export const EventUncheckedUpdateWithoutFilesInputObjectSchema = Yup.object({
    v: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  completed: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  endDate: Yup.mixed().oneOfSchemas([NullableDateTimeFieldUpdateOperationsInputObjectSchema]),  participantsID: Yup.mixed().oneOfSchemas([EventUpdateparticipantsIDInputObjectSchema,
Yup.array().of(Yup.string())]),  participants: AdminUncheckedUpdateManyWithoutEventsNestedInputObjectSchema,  startDate: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  title: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema])
});
