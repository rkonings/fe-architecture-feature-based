import { Cart, CartEntry } from "../../domain/model";
import { config } from '@rkonings/shared'
import { CartEntryApiEntity } from "./api/entity/CartEntryApiEntity";

export interface CartDataSource {
    getCart(): Promise<Cart>;
    addQuantity(cartEntryId: CartEntry['id']): Promise<Cart>;
}

export const cartDatasource: CartDataSource = {
    getCart: async function() {
        let response = await fetch(`${config.baseUrl}/cart`);
        let data = await response.json();
        return data;
    },
    
    addQuantity: async function(cartEntryId: CartEntryApiEntity['id']) {
        let response = await fetch(`${config.baseUrl}/cart/${cartEntryId}`);
        let data = await response.json();
        return data;
    }
}