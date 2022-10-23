import React from 'react';

import ItemBodyLayout from '../layouts/bodies/ItemBodyLayout';
import ReceiptListItemLayout from '../layouts/list-items/ReceiptListItemLayout';

const ListView = ({ listType, collection }) => {
  
  return (
    listType === 'item' ? 
    
    collection.map( ({ itemName, itemQty, itemUnitPrice }) => 
      (<ItemBodyLayout 
          itemName={itemName}
          itemQty={itemQty}
          itemUnitPrice={itemUnitPrice}
        />
      )) :
        
    collection.map( ({ receiptDate, receiptName, receiptTotalPrice }) => 
      (<ReceiptListItemLayout 
            receiptDate={receiptDate}
            receiptName={receiptName}
            receiptTotalPrice={receiptTotalPrice}
        />
      ))
  );
}

export default ListView;