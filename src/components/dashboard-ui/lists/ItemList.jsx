import React from 'react';

import ItemBodyLayout from '../layouts/bodies/ItemBodyLayout';

const items = [
    { itemName: 'Ear buds', itemQty: 1, itemUnitPrice: 24.99},
    { itemName: 'Phone Charger', itemQty: 1, itemUnitPrice: 9.75},
    { itemName: 'Candy Bars', itemQty: 4, itemUnitPrice: 1.99},
    { itemName: 'Onions', itemQty: 3, itemUnitPrice: 0.89},
    { itemName: 'Apples', itemQty: 10, itemUnitPrice: 0.75},
];

const ItemList = () => {
  
  return (
    items.map( ({itemName, itemQty, itemUnitPrice }) => 
        (<ItemBodyLayout 
            itemName={itemName}
            itemQty={itemQty}
            itemUnitPrice={itemUnitPrice}
          />))
  );
}

export default ItemList;