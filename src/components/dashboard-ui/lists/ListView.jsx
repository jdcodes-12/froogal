import React from 'react';

import ItemBodyLayout from '../layouts/bodies/ItemBodyLayout';
import ReceiptListItemLayout from '../layouts/list-items/ReceiptListItemLayout';
import ExpenseListItemLayout from '../layouts/list-items/ExpenseListItemLayout';

const ListView = ({ listType, collection }) => {
  
  return (
    listType.toLocaleLowerCase() === 'item' ? 
  
      collection.map( ({ itemName, itemQty, itemUnitPrice }) => 
      (<ItemBodyLayout 
          itemName={itemName}
          itemQty={itemQty}
          itemUnitPrice={itemUnitPrice}
        />
      )) 
    
    : listType.toLocaleLowerCase() === 'receipt' ? 
      
      collection.map( ({ receiptDate, receiptName, receiptTotalPrice }) => 
      (<ReceiptListItemLayout 
            receiptDate={receiptDate}
            receiptName={receiptName}
            receiptTotalPrice={receiptTotalPrice}
        />
      )) 

    :

      collection.map( ({ expenseDueDate, expenseName, expensePrice, status}) => 
      (<ExpenseListItemLayout 
            expenseDueDate={expenseDueDate}
            expenseName={expenseName}
            expensePrice={expensePrice}
            status={status}
        />
      ))
  );
}

export default ListView;