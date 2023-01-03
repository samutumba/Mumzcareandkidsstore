import * as Yup from 'yup';

export const ProductScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","basePrice","brand","category","createdAt","description","enabled","keywords","maxAge","minAge","subCategory","title","updatedAt"])