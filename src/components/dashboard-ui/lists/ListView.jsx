import ItemBodyLayout from '../layouts/bodies/ItemBodyLayout';
import ReceiptListItemLayout from '../layouts/list-items/ReceiptListItemLayout';
import ExpenseListItemLayout from '../layouts/list-items/ExpenseListItemLayout';

const listRender = (listType, collection) => {
  switch (listType.toLowerCase()) {
    case "item":
      return (
        collection?.length > 0 
        ? collection.map((props, index) => 
          ( <ItemBodyLayout 
              key={index}
              itemName={props?.name}
              itemQty={props?.quantity}
              itemUnitPrice={props?.unitPrice} />
          )) 
        : <ItemBodyLayout itemName={null} itemQty={null} itemUnitPrice={null} /> 
        );
    case "receipt":
      return ( 
        collection.map( ({ receiptDate, receiptName, receiptTotalPrice }, index) => 
        (<ReceiptListItemLayout 
          key={index}
          receiptDate={receiptDate}
          receiptName={receiptName}
          receiptTotalPrice={receiptTotalPrice} />
        ))
        );
    case "expense":
      return ( 
        collection.map(({ expenseDueDate, expenseName, expensePrice, status}, index) => 
          (<ExpenseListItemLayout 
            key={index}
            expenseDueDate={expenseDueDate}
            expenseName={expenseName}
            expensePrice={expensePrice}
            status={status}
            />
          )));
  }
};

const ListView = ({ 
  listType, 
  collection
}) => {
  return (
    listRender(listType, collection)
  );
}

export default ListView;