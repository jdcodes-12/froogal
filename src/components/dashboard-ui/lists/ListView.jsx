import React from 'react';

import ItemBodyLayout from '../layouts/bodies/ItemBodyLayout';
import ReceiptListItemLayout from '../layouts/list-items/ReceiptListItemLayout';

const ListView = ({ listType, collection }) => {
  
  return (
    listType.toLocaleLowerCase() === 'item' ? 
    
    collection.map(({ itemName, itemQty, itemUnitPrice }, index) => 
      (<ItemBodyLayout 
          key={index}
          itemName={itemName}
          itemQty={itemQty}
          itemUnitPrice={itemUnitPrice}
        />
      )) :
        
    collection.map(({ receiptDate, receiptName, receiptTotalPrice }, index) => 
      (<ReceiptListItemLayout 
            key={index}
            receiptDate={receiptDate}
            receiptName={receiptName}
            receiptTotalPrice={receiptTotalPrice}
        />
      ))
  );
}

export default ListView;