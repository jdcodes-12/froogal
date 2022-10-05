/* 
Variables & methods prepended with `_` are meant to be kept private.
They should only be used within the class.
*/

export class ReceiptItem {
  constructor() {
    this._itemId =
    this._itemName = '';       
    this._itemUnitPrice = 0.0;
    this._itemQuantity = 1;
    this._itemTotalPrice = 0.0; 
  }
  
  /*
    -- Getters --
    getItemId() : number
    getItemName() : string
    getItemUnitPrice() : number
    getItemQty() : number
    getItemTotalPrice() : number

    -- Setters --
    setItemId(id: number) : void
    setItemName(itemName: string) : void
    setItemUnitPrice(itemUnitPrice: number) : void
    setItemQuantity(itemQuantity: number) : void

    -- Utility -- 
    _calcualteTotalPrice() : number
  */
};