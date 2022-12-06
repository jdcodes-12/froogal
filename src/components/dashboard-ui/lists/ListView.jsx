import ItemBodyLayout from '../layouts/bodies/ItemBodyLayout';
import ReceiptListItemLayout from '../layouts/list-items/ReceiptListItemLayout';
import ExpenseListItemLayout from '../layouts/list-items/ExpenseListItemLayout';

const listRender = (listType, collection, deleteModal, onDeletion) => {
  switch (listType.toLowerCase()) {
    case "item":
      return (
        collection?.length > 0
          ? collection.map((props, index) =>
          (<ItemBodyLayout
            key={index}
            itemName={props?.name}
            itemQty={props?.quantity}
            itemUnitPrice={props?.unitPrice} />
          ))
          : <ItemBodyLayout itemName={null} itemQty={null} itemUnitPrice={null} />
      );

    case "receipt":
      return (
        collection?.length > 0
          ? collection.map((receipt, index) =>
          (<ReceiptListItemLayout
            key={index}
            id={receipt?.id}
            receipt={receipt}
            onDeletion={onDeletion}
            deleteModal={deleteModal} />
          ))
          : <ReceiptListItemLayout noReceipt />
      );

    case "expense":
      return collection.map((expense, index) => (
        <ExpenseListItemLayout key={index} expense={expense} />
      )
      );
  }
};

const ListView = ({
  listType,
  collection,
  deleteModal = false,
  onDeletion = () => null,
}) => {
  return (
    listRender(listType, collection, deleteModal, onDeletion)
  );
}

export default ListView;