// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { FileUpdateManyWithoutEventsNestedInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateparticipantsIDInputObjectSchema } from '../internals';;
import { AdminUpdateManyWithoutEventsNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';

export const EventUpdateInputObjectSchema = Yup.object({
    v: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  files: FileUpdateManyWithoutEventsNestedInputObjectSchema,  completed: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  endDate: Yup.mixed().oneOfSchemas([NullableDateTimeFieldUpdateOperationsInputObjectSchema]),  participantsID: Yup.mixed().oneOfSchemas([EventUpdateparticipantsIDInputObjectSchema,
Yup.array().of(Yup.string())]),  participants: AdminUpdateManyWithoutEventsNestedInputObjectSchema,  startDate: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  title: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema])
});
