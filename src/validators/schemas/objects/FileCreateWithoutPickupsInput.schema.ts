// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedOneWithoutFilesInputObjectSchema } from '../internals';;
import { DeliveryCreateNestedOneWithoutDocumentsInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutImagesInputObjectSchema } from '../internals';;
import { ProductCreateNestedOneWithoutImagesInputObjectSchema } from '../internals';;
import { AdminCreateNestedManyWithoutProfileInputObjectSchema } from '../internals';

export const FileCreateWithoutPickupsInputObjectSchema = Yup.object({
    id: Yup.string(),  fileKey: Yup.string().required(),  link: Yup.string().required(),  type: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  events: EventCreateNestedOneWithoutFilesInputObjectSchema,  deliveries: DeliveryCreateNestedOneWithoutDocumentsInputObjectSchema,  locations: LocationCreateNestedOneWithoutImagesInputObjectSchema,  products: ProductCreateNestedOneWithoutImagesInputObjectSchema,  admins: AdminCreateNestedManyWithoutProfileInputObjectSchema
});
