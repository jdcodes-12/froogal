export class ExpenseItem {
  constructor() {
    this._itemId =
    this._itemName = '';       
    this._itemPrice = 0.0;
    this._itemStatus = '';
    this._isActive = false;
    this._dueDate = new Date();
  }
  
  /*
    -- Getters --
    getItemId() : number
    getItemName() : string
    getItemPrice() : number
    getItemStatus() : string;
    getItemDueDate() : Date

    -- Setters --
    setItemId(id: number) : void
    setItemName(itemName: string) : void
    setItemPrice(itemPrice: number) : void 
    setItemStatus(itemStatus : string) : void // will call toggleActiveStatus

    -- Utility -- 
    _toggleActiveStatus(status: string) : void // inactive = false || active = true;
    isActive() : bool
  */
};