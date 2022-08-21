import { CartEntryApiEntity } from "./CartEntryApiEntity";

export interface CartApiEntity {
    id: string;
    entries: CartEntryApiEntity[]
}