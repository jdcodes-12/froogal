import ItemTileContainer from '../../containers-ui/ItemTileContainer';
import ReceiptItemBodyLayout from '../layouts/bodies/ReceiptItemBodyLayout';

const ReceiptItem = ({ width, receipt, hub = false }) => {
  return (
    <ItemTileContainer hub={hub} width={width} shouldHover={true} boxShadow='inner'>
      <ReceiptItemBodyLayout width={width} receipt={receipt} />
    </ItemTileContainer>
  );
}

export default ReceiptItem;