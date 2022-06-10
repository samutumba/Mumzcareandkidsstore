import { SelectedProductType, SelectedApparelType } from "./";

export type ICartItemType = SelectedProductType | SelectedApparelType

export type ICartType = ICartItemType[]