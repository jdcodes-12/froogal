import ItemTileContainer from '../../containers-ui/item-title-container';
import ReceiptItemBodyLayout from '../layouts/bodies/ReceiptItemBodyLayout';

const ReceiptItem = ({ width, receipt, hub = false }) => {
  return (
    <ItemTileContainer hub={hub} width={width} shouldHover={true} boxShadow='inner'>
      <ReceiptItemBodyLayout width={width} receipt={receipt} />
    </ItemTileContainer>
  );
}

export default ReceiptItem;