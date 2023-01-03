import * as Yup from 'yup';

export const FileScalarFieldEnumSchema = Yup.mixed().oneOf(["id","fileKey","link","type","updatedAt","createdAt","eventsId","deliveriesId","pickupsId","locationsId","productsId"])