import { IFile } from "."

export interface ILocation {
 _id: string,
 name: string,
 address: string,
 maps: string,
 isStore: boolean,
 phone: string[],
 email: string[],
 images?: IFile[]
} 